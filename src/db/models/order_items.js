'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order_Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order_Items.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    product_amount: DataTypes.FLOAT,
    discount_type: DataTypes.STRING,
    discount_amount: DataTypes.FLOAT,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order_Items',
    underscored: true,
  });
  return Order_Items;
};