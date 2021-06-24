const express = require("express");
const {
  getListUser,
  getUserDetail,
  postNewUser,
  removeUser,
  updateUser,
  createUser,
} = require("../controllers/user.controller");
const { logFeature } = require("../middlewares/log/log-feature.middlewares");
const { checkExist } = require("../middlewares/validations/check-exist.middlewares");
const {User} = require("../models")
const userRouter = express.Router();

//create api user management

/**
 * api: lấy danh sách người dùng
 * method: get
 * url: httlp://localost:7000/api/users/
 * body:  {name,email}
 */
userRouter.get("/",logFeature('lấy danh sách người dùng'), getListUser);
/**
 * api: lấy chi tiết người dùng
 * method: get
 * url: httlp://localost:7000/api/users/:id
 */
userRouter.get("/:id",logFeature('lấy chi tiết người dùng'), getUserDetail);
/**
 * api: up người dùng mới
 * method: post
 * url: httlp://localost:7000/api/users/
 */
//   POST người dùng
userRouter.post("/", createUser);
//DELETE người dùng
userRouter.delete("/:id",checkExist(User) ,removeUser);
// CẬP NHẬT người dùng
userRouter.put("/:id",checkExist(User) , updateUser);

module.exports = { userRouter };
