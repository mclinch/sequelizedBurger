// // var orm = require("../config/orm");

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   create: function(vals, cb) {
//     orm.create("burgers", "burger_name", vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };
// module.exports = burger;
module.exports = function (sequelize, DataTypes) {
    let burgers = sequelize.define('burger', {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return burgers;
}