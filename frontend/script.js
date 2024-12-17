const apiURL = "http://localhost:3000/messages";
const messagesList = document.getElementById("messages");

// Enviar un nuevo mensaje
document.getElementById("send").addEventListener("click", async () => {
  const sender = document.getElementById("sender").value;
  const content = document.getElementById("content").value;

  if (sender && content) {
    await fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sender, content }),
    });
    document.getElementById("content").value = ""; // Limpiar input
    loadMessages(); // Actualizar mensajes
  } else {
    alert("Por favor completa todos los campos.");
  }
});

// Obtener mensajes periódicamente (Polling)
async function loadMessages() {
  const response = await fetch(apiURL);
  const messages = await response.json();

  // Renderizar mensajes
  messagesList.innerHTML = "";
  messages.forEach((msg) => {
    const li = document.createElement("li");
    li.textContent = `[${msg.sender}] ${msg.content} - ${msg.timestamp}`;
    messagesList.appendChild(li);
  });
}

// Polling: Obtener mensajes cada 2 segundos
setInterval(loadMessages, 2000);
loadMessages();
