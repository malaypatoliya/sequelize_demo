'use strict';

const fs = require('fs');
const path = require('path');
const process = require('process');
const basename = path.basename(__filename);
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/database.json')[env];
const db = {};

// define our database connection using the sequelize object.
let sequelize = new Sequelize({
  host: config.host,
  username: config.username,
  password: config.password,
  port: config.port,
  database: config.database,
  dialect: config.dialect,
});

// Testing the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully!!");
  })
  .catch((err) => {
    console.log("Error while connecting dataabase ==>>>>" , err);
  });

// model associations
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// model associations 
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.categories = require('./categories')(sequelize, Sequelize.DataTypes);
db.products = require('./products')(sequelize, Sequelize);
db.product_categories = require('./product_categories')(sequelize, Sequelize);
db.customers = require('./customers')(sequelize, Sequelize);
db.addresses = require('./addresses')(sequelize, Sequelize);
db.payment_status_master = require('./payment_status_master')(sequelize, Sequelize);
db.order_status_master = require('./order_status_master')(sequelize, Sequelize);
db.orders = require('./orders')(sequelize, Sequelize);
db.order_items = require('./order_items')(sequelize, Sequelize);

module.exports = db;