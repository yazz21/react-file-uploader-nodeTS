// const { sequelize, DataTypes } = require("sequelize");

// const file = sequelize.define("files", {
//    title: {
//      type: DataTypes.STRING,
//      allowNull: false
//    }
// });

// export default file;

module.exports = (sequelize : {
    define: any
}, Sequelize : {
    STRING: any;
}) => {
    const file = sequelize.define("files", {
        fieldname: {
            type: Sequelize.STRING
        },
        originalname: {
            type: Sequelize.STRING
        },
        encoding: {
            type: Sequelize.STRING
        },
        mimetype: {
            type: Sequelize.STRING
        },
        destination: {
            type: Sequelize.STRING
        },
        filename: {
            type: Sequelize.STRING
        },
        path: {
            type: Sequelize.STRING
        },
        size: {
            type: Sequelize.STRING
        }

    });
}
