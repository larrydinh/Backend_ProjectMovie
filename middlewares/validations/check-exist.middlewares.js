const { Model } = require("sequelize");

const checkExist =(Model)=> async (req, res, next) => {
  const { id } = req.params;
  try {
    const detail = await Model.findOne({ where: { id } });
    if (detail) {
      next();
    } else {
      res.status(400).send(`ID ${id} not found nha boa`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  checkExist,
};
