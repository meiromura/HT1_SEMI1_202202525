const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    alumno: "Jose Andres de Paz Benito",
    carnet: "202202525",
    seccion: "B",
    api: "API #2",
    lenguaje: "JavaScript",
    framework: "Express"
  });
});

app.get("/check", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API #2 running on port ${PORT}`);
});
