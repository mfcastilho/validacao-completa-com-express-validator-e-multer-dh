const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const UsersController = require("../controllers/UsersController");


const storage = multer.diskStorage({
  destination:(req, file, callback)=>{
    callback(null, path.resolve("src","public","images"));
  },
  filename:(req, file, callback)=>{
    callback(null, `${Date.now()}_img_${file.originalname}`);
  }
});

const uploadFile = multer({ storage:storage });

//GET home page
router.get("/", UsersController.showHomePage);

router.post("/");




module.exports = router;