'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersWorkingDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UsersWorkingDay.init({
    userId: DataTypes.INTEGER,
    workingDayId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsersWorkingDay',
  });

  UsersWorkingDay.associate = function(models) {
    UsersWorkingDay.belongsTo(models.User, {
      foreignKey: "userId"
    });

    UsersWorkingDay.belongsTo(models.WorkingDay, {
      foreignKey: 'workingDayId'
    });

  // untuk relasi many to many kita perlu kasih definisi
  // di model User kita kasih belongsToMany.WorkingDay
  // di model WorkingDay kita kasih belongsToMany.User
  // di model penghubungnya (UsersWorkingDay) kita kasih UsersWorkingDay.belongsTo User
  // di model penghubungnya (UsersWorkingDay) kita kasih UsersWorkingDay.belongsTo WorkingDay
  }
  return UsersWorkingDay;
};