//importa o express de uma forma antiga
//const express = require("express");

//importa o express de uma forma moderna
import express from "express";
//cria o objeto app que tem as funçoes do express
const app = express();

//cria a rota get
app.get("/", (req, res) => {
  res.json({
    message: "foi o get",
  });
});

//cria a rota post
app.post("/", (req, res) => {
  res.json({
    message: "foi o post",
  });
});

//cria a rota put
app.put("/", (req, res) => {
  res.json({
    message: "foi o put",
  });
});

//cria a rota patch
app.patch("/", (req, res) => {
  res.json({
    message: "foi o patch",
  });
});

//cria a rota delete
app.delete("/", (req, res) => {
  res.json({
    message: "foi o delete",
  });
});

//sobe o servidor e fica ouvindo as rotas criadas
app.listen(3000, () => {
  console.log("o server ai http://localhost:3000");
});
