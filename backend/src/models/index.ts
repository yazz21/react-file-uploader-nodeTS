// import { Sequelize } from "sequelize/types/sequelize";
const Sequelize = require("sequelize")

const fs = require('fs');
var db: any

const sequeliz = new Sequelize('reactFileUpload', 'yazz', 'yazz', {
    host: 'localhost',
    dialect: 'mysql'
});
fs.readdirSync(__dirname)
  .filter((file: string) => file !== 'index.js')
  .forEach((file: any) => {
    // const model = sequelize.import(path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(sequeliz, Sequelize.DataTypes);

    
    db[model.name] = model;
    // console.log(model)
  });

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequeliz;
db.Sequelize = Sequelize;

Sequelize.sync({ alter: true }).then(() => {});

module.exports = db;
