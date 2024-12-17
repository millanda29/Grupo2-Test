const messagesQueue = [];

// Agregar un mensaje a la cola
function addMessage(message) {
  messagesQueue.push({
    id: Date.now(),
    content: message.content,
    sender: message.sender,
    timestamp: new Date().toISOString(),
  });
}

// Obtener todos los mensajes
function getMessages() {
  return messagesQueue;
}

// Eliminar el mensaje más antiguo
function deleteMessage() {
  return messagesQueue.shift(); // Elimina el primer elemento de la cola
}

module.exports = {
  addMessage,
  getMessages,
  deleteMessage,
};
