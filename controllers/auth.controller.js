const { User } = require("../models");
const bcryptjs = require("bcryptjs");
const signIn = async (req, res) => {
  const { email, password } = req.body;
  /**
   * 2 buoc dang nhap:
   * 1/ tim user theo email
   * 2. so sanh password
   */
  try {
    const userLogin = await User.findOne({ where: { email } });
    if (userLogin) {
      //so sanh password
      const isAuth = bcryptjs.compareSync(password, userLogin.password);
      if (isAuth) {
        res.status(200).send("dang nhap thanh cong");
      } else {
        res.status(400).send("sai mat khau");
      }
    } else {
      //tra ve 404 email ko ton tai
      res.status(404).send("email ko ton tai");
    }
    res.send({ email, password });
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  signIn,
};
