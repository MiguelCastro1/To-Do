'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('ToDos', [
    {
      id: 1,
      title: 'Ler Libro',
      description: 'Ler o livro de Redes para a prova final',
      isDone: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      title: 'Lista',
      description: 'Faser a lista de exericios',
      isDone: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      title: 'Ver playlist',
      description: 'Assitir playlist para a prova final',
      isDone: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ToDos', null, {});
  }
};
