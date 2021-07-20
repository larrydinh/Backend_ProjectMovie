const { User } = require("../models");
const graphqlResolvers = {
  // user(params) {
  //   const {id} = params;
  //   console.log("params", params );
  // return {
  //   id: 1,
  // name: "Nguyen Phong Hao",
  // email: "hao@gmail.com",
  // password: "asdasdasd",
  // age: 20,
  // phone: "0858121314",
  // role: "ADMIN",
  // avatar: "adasd.jpg",
  // };

  async user(params) {
    const { id } = params;
    try {
      const userDetail = await User.findByPk(id);
      return userDetail;
    } catch (error) {
      throw new Error(error);
    }
  },
  async users() {
    try {
      const userList = await User.findAll();
      return userList;
    } catch (error) {
      throw new Error(error);
    }
  },
  async createUser(params) {
    const { inputUser } = params;
    try {
      const newUser = await User.create({ ...inputUser });
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateUser(params) {
    const { inputUser, id } = params;
    try {
      await User.update(inputUser, {
        where: {
          id,
        },
      });
      const userUpdated = await User.findByPk(id);
      return userUpdated;
    } catch (error) {
      throw new Error(error);
    }
  },
  async removeUser(params) {
    const { id } = params;
    try {
      const userRemove = await User.findByPk(id);
      await User.destroy({
        where: { id },
      });
      return userRemove;
    } catch (error) {
      throw new Error(error);
    }
  },
};

module.exports = {
  graphqlResolvers,
};
