const express = require("express");
const { authenticate, authorize } = require("../auth/verify-token.middleware");
const {
  getListUser,
  getUserDetail,
  postNewUser,
  removeUser,
  updateUser,
  uploadAvatar,
  createUser,
} = require("../controllers/user.controller");
const { logFeature } = require("../middlewares/log/log-feature.middlewares");
const { checkExist } = require("../middlewares/validations/check-exist.middlewares");
const {User} = require("../models");
const { uploadImageSingle } = require("../uploads/upload-image.middleware");
const userRouter = express.Router();

// upload avatar
userRouter.post("/upload-avatar",authenticate,uploadImageSingle(),uploadAvatar);
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
userRouter.delete("/:id",authenticate,authorize('ADMIN', 'SUPER_ADMIN'),checkExist(User) ,removeUser);
// CẬP NHẬT người dùng
userRouter.put("/:id",checkExist(User) , updateUser);

module.exports = { userRouter };
