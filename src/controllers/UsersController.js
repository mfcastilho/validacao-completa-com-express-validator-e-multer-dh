const UsersModel = require("../models/UsersModel");


const UsersController = {
  showHomePage:(req, res)=>{

    return res.render("userRegisterForm.ejs");

  },
  register:(req, res)=>{

    return res.render("userRegisterForm.ejs");

  },
  processRegister:(req, res)=>{

    return res.send("Usuário registrado!");

  }
}

module.exports = UsersController;