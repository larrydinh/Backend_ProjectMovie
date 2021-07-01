const multer = require("multer");

const uploadImageSingle = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images/avatar");
    }, //duong dan thu muc de luu file
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  });
  const upload = multer({ storage });
  return upload.single("avatar");
};


module.exports = { 
    uploadImageSingle,
}