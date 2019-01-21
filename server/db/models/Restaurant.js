const db = require('../db');
const Sequelize = require('sequelize');

const Restaurant = db.define('meeting', {
  name: {
    type: Sequelize.String,
    allowNull: true
  },
  description: {
      type: Sequelize.String,
      allowNull: true
  },
  coordinates: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true
  }
});

module.exports = Restaurant

