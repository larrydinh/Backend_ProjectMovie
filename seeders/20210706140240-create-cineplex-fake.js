'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // for (let index = 0; index < 1000; index++) {
    //   const element = array[index];
      
    // }
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Cineplexes', [{
      id: 1,
      name:"BDH",
      logo:"ahihi.jpg" ,
      createdAt:"2021-07-06 21:08:50",
      updatedAt:"2021-07-06 21:08:50" 
     },
     {
      id: 2,
      name:"DDC",
      logo:"ddc.jpg" ,
      createdAt:"2021-07-06 21:08:50",
      updatedAt:"2021-07-06 21:08:50" 
     }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Cineplexes', null, {});
  }
};
