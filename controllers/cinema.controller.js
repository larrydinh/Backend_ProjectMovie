const { Cinema, Cineplex, sequelize } = require("../models");
const getListCinema = async (req, res) => {
  try {
    const cinemaList = await Cinema.findAll({
        //include để link giống như inner join 
      include: [{ model: Cineplex }],
    });
    res.status(200).send(cinemaList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getListCineplexwithCinema = async (req, res) => {
    try {
      const cineplexList = await Cineplex.findAll({
          //include để link giống như inner join 
        include: [{ model: Cinema }],
      });
      res.status(200).send(cineplexList);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  const getByCineplex = async (req,res) => {
      const {namCineplex} = req.query;
// console.log({namCineplex});
      try {
          //đi làm thường sẽ lấy 5,6 bảng
       const [results] = await sequelize.query(`
       select Cinemas.name as CinemasName, Cineplexes.name as CineplexesName from Cinemas
       inner join Cineplexes
       ON Cinemas.cineplexId = Cineplexes.id
       where Cineplexes.name like "%${namCineplex}%";`);
       res.status(200).send(results);
      } catch (error) {
          console.log(error);
        res.status(500).send(error); 
      }
  }

module.exports = { getListCinema,getListCineplexwithCinema,getByCineplex };
