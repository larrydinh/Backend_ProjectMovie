'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Cinemas', [
       {
      id: 1,
      name: "BHD 3 thang 2",
      address:"nha tu 341 Thanh Thai",
      image:"wtf.jpg" ,
      cineplexId: 1, // bhd === 1 
      createdAt:"2021-07-06 21:08:50",
      updatedAt:"2021-07-06 21:08:50" 
       },
       {
        id: 2,
        name: "BHD Nguyen Gia Tri",
        address:"202 duong Nguyen Gia Tri quan Binh Thanh",
        image:"fsdfsdfsd.jpg" ,
        cineplexId: 1, // bhd === 1 
        createdAt:"2021-07-06 21:08:50",
        updatedAt:"2021-07-06 21:08:50" 
         }
      
      ], {});
    
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Cinemas', null, {});
  }
}
}