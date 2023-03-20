'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order_Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      product_name: {
        type: Sequelize.STRING(512),
        allowNull: false
      },
      qty: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      product_amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      discount_type: {
        type: Sequelize.STRING(16),
        allowNull: false,
        defaultValue: 'NONE',
        validate: { 
          isIn : [['NONE', 'PERCENTAGE', 'AMOUNT']]
        }
      },
      discount_amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
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
    await queryInterface.dropTable('Order_Items');
  }
};