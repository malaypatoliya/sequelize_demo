'use strict';

const { UUIDV4 } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
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
      delivery_address_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Addresses',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      shipping_address_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Addresses',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      payment_status: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Payment_Status_Master',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      order_status: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Order_Status_Master',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      order_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: UUIDV4()
      },
      order_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      special_note: {
        type: Sequelize.STRING(512),
        allowNull: true,
        defaultValue: null
      },
      estimated_delivery_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      sub_total: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      tax_amout: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      discount_amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      total_amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      paid_amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      payment_type: {
        type: Sequelize.STRING(16),
        allowNull: false,
        defaultValue: 'COD',
        validate: {
          isIn: [['COD', 'ONLINE', 'WALLET', 'CARD', 'UPI', 'NETBANKING']]
        }
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
    await queryInterface.dropTable('Orders');
  }
};