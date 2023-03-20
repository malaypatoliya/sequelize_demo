'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    customer_id: DataTypes.INTEGER,
    delivery_address_id: DataTypes.INTEGER,
    shipping_address_id: DataTypes.INTEGER,
    payment_status: DataTypes.INTEGER,
    order_status: DataTypes.INTEGER,
    order_number: DataTypes.INTEGER,
    order_date: DataTypes.DATEONLY,
    special_note: DataTypes.STRING,
    estimated_delivery_date: DataTypes.DATEONLY,
    sub_total: DataTypes.FLOAT,
    tax_amout: DataTypes.FLOAT,
    discount_amount: DataTypes.FLOAT,
    total_amount: DataTypes.FLOAT,
    paid_amount: DataTypes.FLOAT,
    payment_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
    underscored: true,
  });
  return Orders;
};