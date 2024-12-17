const express = require("express");
const cors = require("cors");
const messages = require("./messages");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Obtener mensajes de la cola
app.get("/messages", (req, res) => {
  const queue = messages.getMessages();
  res.json(queue);
});

// Enviar un nuevo mensaje a la cola
app.post("/messages", (req, res) => {
  const { content, sender } = req.body;

  if (!content || !sender) {
    return res.status(400).json({ error: "Se requiere contenido y remitente." });
  }

  messages.addMessage({ content, sender });
  res.status(201).json({ message: "Mensaje agregado correctamente" });
});

// Eliminar el mensaje más antiguo (simulando consumo de cola)
app.delete("/messages", (req, res) => {
  const deletedMessage = messages.deleteMessage();
  if (deletedMessage) {
    res.json({ message: "Mensaje eliminado", data: deletedMessage });
  } else {
    res.status(404).json({ error: "No hay mensajes para eliminar." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
