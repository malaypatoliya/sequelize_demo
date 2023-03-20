'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Customers',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      address_line_1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address_line_2: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      area: {
        type: Sequelize.STRING(64),
        allowNull: true,
        defaultValue: null
      },
      city: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      state: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      country: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      postal_code: {
        type: Sequelize.STRING(8),
        allowNull: false,
        validate: {
          len: 6
        }
      },
      landmark: {
        type: Sequelize.STRING(64),
        allowNull: true,
        defaultValue: null
      },
      tag: {
        type: Sequelize.STRING(8),
        allowNull: false,
        defaultValue: 'home',
        validate: {
          isIn: [['home', 'office', 'other']]
        }
      },
      is_default: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      deleted_at: {
        type: Sequelize.DATE,
        defaultValue: null,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Addresses');
  }
};