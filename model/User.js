const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgresql://postgres:postgres@localhost:5432/postgres');

const User = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roles: {
    type: DataTypes.JSONB,
    defaultValue: {
      User: 2001,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  refreshToken: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = User;
