const UsersModel = require("../models/UsersModel");
const { validationResult } = require("express-validator");


const UsersController = {
  showHomePage:(req, res)=>{

    return res.render("userRegisterForm.ejs");

  },
  register:(req, res)=>{

    return res.render("userRegisterForm.ejs");

  },
  processRegister:(req, res)=>{
    const resultValidations = validationResult(req);

    if(resultValidations.errors.length > 0){
      return res.render("userRegisterForm.ejs", {errors:resultValidations.mapped(), old:req.body})
    }

    return res.send("Informações enviadas com sucesso!");
  }
}

module.exports = UsersController;