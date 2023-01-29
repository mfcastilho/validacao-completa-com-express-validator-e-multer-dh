const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

/*podemos usar tanto o check quanto o body
  ambos vão fazer a mesma coisa*/
const { check } = require("express-validator");

const UsersController = require("../controllers/UsersController");
const { isString } = require("util");

const storage = multer.diskStorage({
  destination:(req, file, callback)=>{
    callback(null, "src/public/images");
  },
  filename:(req, file, callback)=>{
    callback(null, `${Date.now()}_img_${file.originalname}`);
  }
});

const uploadFile = multer({ storage:storage });

const validations = [
  check("name")
    .notEmpty().withMessage("O campo nome NÃO pode ser enviado vazio!").bail()
    .isString().withMessage("O campo nome NÃO aceita números!").bail()
    .trim(),

  check("email")
    .notEmpty().withMessage("O campo email NÃO pode ser enviado vazio!").bail()
    .trim().bail()
    .normalizeEmail().bail()
    .isEmail().withMessage("Digite um formato de email correto!"),

  check("password")
    .notEmpty().withMessage("O campo senha NÃO pode ser enviado vazio!").bail()
    .isLength({ min:6 }).withMessage("A senha precisa ter no mínimo 6 caracteres!").bail()
    .trim(),

  check("avatar").custom((value, {req})=>{
    let file = req.file;
    let acceptedExtentions = [".jpg", ".png", ".gif"];

    if(!file){
      throw new Error("Precisa escolher um arquivo");
    }else{
      let fileExtension = path.extname(file.originalname);
      if(!acceptedExtentions.includes(fileExtension)){
        throw new Error(`As extensões permitidas são ${acceptedExtentions.join(", ")}`);
      }
    }
    return true;
  })  
];





//=== Formulário de registro ===
router.get("/",UsersController.showHomePage);


//Processar o registro
router.post("/", uploadFile.single("avatar"), validations, UsersController.processRegister);




module.exports = router;