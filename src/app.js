
//=== IMPORTAÇÕES ===
const express = require("express");
const path = require("path");
const userRoutes = require("./routes/userRoutes");


//=== VARIÁVEIS ===
const app = express();
const port = 8000;


//Template Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));



//=== MIDDLEWARES ===
app.use(express.json());
app.use(express.static(path.resolve("src", "public")));
app.use(express.urlencoded({ extended:false }));


//=== ROTAS ===
app.use(userRoutes);


//=== CONFIGURAÇÃO DO SERVIDOR ===
app.listen(port, ()=>{
  console.log(`O servidor está rodando na porta:${port}`);
});