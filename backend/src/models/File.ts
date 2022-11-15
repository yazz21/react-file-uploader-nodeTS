// const { sequelize, DataTypes } = require("sequelize");

// const file = sequelize.define("files", {
//    title: {
//      type: DataTypes.STRING,
//      allowNull: false
//    }
// });

// export default file;

module.exports = (sequelize: { define: (arg0: string, arg1: { title: { type: any; }; }) => any; }, Sequelize: { STRING: any; }) => {
  const file = sequelize.define("files", {
        title: {
          type: Sequelize.STRING
        } 
      });
   }