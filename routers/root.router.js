const express = require("express");
const {authRouter} = require("./auth.router");
const { cinemaRouter } = require("./cinema.router");
const {userRouter} = require("./user.router");
const rootRouter = express.Router();

// httlp://localhost:7000/api/users
rootRouter.use("/users", userRouter);
rootRouter.use("/auth",authRouter);
rootRouter.use("/cinemas",cinemaRouter);
// rootRouter.use('/api/movie',movieRouter)

module.exports = {
  rootRouter,
};
