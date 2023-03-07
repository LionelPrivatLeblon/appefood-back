var express = require("express");
var router = express.Router();

const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const uniqid = require("uniqid");

router.post("/upload", async (req, res) => {
  const photoPath = `./tmp/${uniqid()}.jpg`;
  const resultMove = await req.files.photoFromFront.mv(photoPath);

  if (!resultMove) {
    //upload file to permanent storage on cloudinary server
    const resultCloudinary = await cloudinary.uploader.upload(photoPath);
    res.json({ result: true, url: resultCloudinary.secure_url });
  } else {
    res.json({ result: false, error: resultMove });
  }
  fs.unlinkSync("./tmp/photo.jpg"); //supprimer le fichier
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
