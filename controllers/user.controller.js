const bcryptjs = require("bcryptjs")
const { User } = require("../models");

const userList = [
  {
    id: "1",
    name: "Trần Thị Heo",
    email: "olala@gmail.com",
  },
  {
    id: "2",
    name: "Đinh Hữu Tèo",
    email: "omg@gmail.com",
  },
];
/**
 * api: lấy danh sách người dùng
 * method: get
 * url: httlp://localost:7000/api/users/
 * body:  {name,email}
 */
const createUser = async (req, res) => {
  const { name, email, password, age, phone, role } = req.body;
  try {
//tao chuoi ngau nhien
const salt = bcryptjs.genSaltSync(10);
//ma hoa password
const hashPassword = bcryptjs.hashSync(password,salt);
    const newUser = await User.create({
      name,
      email,
      password:hashPassword,
      age,
      phone,
      role,
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getListUser = async (req, res) => {
  try {
    const userList = await User.findAll();
    res.status(200).send(userList);
  } catch (error) {
    res.status(500).send(error);
  }
};
/**
 * api: lấy chi tiết người dùng
 * method: get
 * url: httlp://localost:7000/api/users/:id
 */
const getUserDetail = async (req, res) => {
  //   console.log(req.params.id);
  const { id } = req.params;
  try {
    const userDetail = await User.findByPk(id);
    res.status(200).send(userDetail);
  } catch (error) {
    res.status(500).send(error);
  }
  //   const userDetail = userList.find((user) => user.id == id);
  //   if (userDetail) {
  //     res.status(200).send(userDetail);
  //   } else {
  //     res.status(404).send("Not found!");
  //   }
};
/**
 * api: up người dùng mới
 * method: post
 * url: httlp://localost:7000/api/users/
 */
//   POST người dùng
const postNewUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: Math.random().toString(), name, email };
  userList.push(newUser);
  res.status(201).send(newUser);
  console.log(req.body);
};
//DELETE người dùng
const removeUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: { id },
    });
    res.status(200).send("xoa thanh cong");
  } catch (error) {
    res.status(500).send(error);
  }
  //   const index = userList.findIndex((user) => user.id == id);
  //   if (index !== -1) {
  //     const userDelete = userList[index];
  //     userList.splice(index, 1);
  //     res.status(200).send(userDelete);
  //   } else {
  //     res.status(404).send("Not found!");
  //   }
};
// CẬP NHẬT người dùng
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, age, phone, role } = req.body;

  try {
    //   thuong se ko update password, ma sẽ viết API riêng cho nó
    await User.update(
      { name, email, age, phone, role },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).send("update thanh cong");
  } catch (error) {
    res.status(500).send(error);
  }
  //   const index = userList.findIndex((user) => user.id == id);
  //   if (index !== -1) {
  //     const user = userList[index];
  //     const userUpdate = { ...user, name, email };
  //     userList[index] = userUpdate;
  //     res.status(200).send(userUpdate);
  //   } else {
  //     res.status(404).send("Not found!");
  //   }
};

module.exports = {
  getListUser,
  getUserDetail,
  postNewUser,
  removeUser,
  updateUser,
  createUser,
};
