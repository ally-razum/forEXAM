'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
      static associate({Event}) {
      this.hasMany(Event, {foreignKey: "user_id"});
      
    }
  }
  User.init({
    fullName: DataTypes.STRING,
    login: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    info: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};