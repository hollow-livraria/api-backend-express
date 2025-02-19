//importa o express de uma forma antiga
//const express = require("express");

//importa o express de uma forma moderna
import express from "express";
//importa o usersRouter
import userRouter from "./routers/users.js";
//importa o prodRouter
import prodRouter from "./routers/prod.js";
//cria o objeto app que tem as funçoes do express
const app = express();

//middleware
app.use("/user", userRouter);
app.use("/prod", prodRouter);
//sobe o servidor e fica ouvindo as rotas criadas
app.listen(3000, () => {
  console.log("o server ai http://localhost:3000");
});
