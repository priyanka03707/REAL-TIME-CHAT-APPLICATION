const ws = new WebSocket("wss://echo.websocket.events");

ws.onopen = () => {
    console.log("Connected to WebSocket server!");
};

ws.onmessage = (event) => {
    displayMessage(event.data, "bot");
};

function sendMessage() {
    const input = document.getElementById("messageInput");
    const message = input.value.trim();

    if (message) {
        ws.send(message);
        displayMessage(message, "user");
        input.value = "";

        // Simulated bot response
        setTimeout(() => {
            botReply(message);
        }, 1000);
    }
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const msgDiv = document.createElement("div");

    msgDiv.textContent = message;
    msgDiv.classList.add("message");

    if (sender === "user") {
        msgDiv.classList.add("user-message");
    } else {
        msgDiv.classList.add("bot-message");
    }

    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Bot response logic
function botReply(userMessage) {
    let botResponse = "I didn't understand that. 🤔";
    const lowerMsg = userMessage.toLowerCase();

    if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
        botResponse = "Hello! How can I help you? 😊";
    } else if (lowerMsg.includes("how are you")) {
        botResponse = "I'm just a bot, but I'm doing great! 🤖";
    } else if (lowerMsg.includes("your name")) {
        botResponse = "I'm ChatBot 3000! 🚀";
    } else if (lowerMsg.includes("bye")) {
        botResponse = "Goodbye! Have a great day! 👋";
    }

    displayMessage(botResponse, "bot");
}
