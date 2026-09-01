const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    Instancia: "Instancia #2 - API #2",
    Curso: "Seminario de Sistemas 1",
    Estudiante: "Estudiante - 202202525"
  });
});

app.get("/check", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API #2 running on port ${PORT}`);
});
