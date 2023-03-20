'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    title: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    discount_type: DataTypes.STRING,
    discount_amount: DataTypes.FLOAT,
    avatar_image: DataTypes.STRING,
    images: DataTypes.BLOB,
    short_description: DataTypes.STRING,
    description: DataTypes.TEXT,
    is_active: DataTypes.BOOLEAN,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Products',
    underscored: true,
  });
  return Products;
};