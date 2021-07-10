const { Router } = require("express");
const { getListCinema, getListCineplexwithCinema, getByCineplex } = require("../controllers/cinema.controller");

const cinemaRouter = Router();
cinemaRouter.get("/", getListCinema);
cinemaRouter.get("/with-cineplex", getListCineplexwithCinema)
cinemaRouter.get("/by-cineplex", getByCineplex)
module.exports = {
  cinemaRouter,
};

