const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(process.cwd(), ".env") });
const cloudinary_config = cloudinary.v2;

cloudinary_config.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary_config;
