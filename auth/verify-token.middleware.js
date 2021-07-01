const jwt = require("jsonwebtoken");
//kiem tra nguoi dung dang nhap hay chua
const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const secretKey = "haoPN";
    const decode = jwt.verify(token, secretKey);
    req.user = decode;
    next();
    // res.send(decode);
  } catch (error) {
    res.status(401).send("ban chua nhap");
  }
};
const authorize =(arrRole)=> (req, res, next) => {
  const { user } = req;
  if (arrRole.findIndex((role)=>user.role ===role)>-1) {
    next();
  } else {
    res.status(403).send("Ban ko co quyen");
  }
};

module.exports = {
  authenticate,
  authorize,
};
