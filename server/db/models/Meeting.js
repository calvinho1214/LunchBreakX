const db = require('../db');
const Sequelize = require('sequelize');

const Meeting = db.define('meeting', {
    Host: {
        type: Sequelize.STRING,
        allowNull: true
    },
    guest:{
      type: Sequelize.STRING,
      allowNull: true
    },
    decription: {
        type: Sequelize.TEXT
    }
});

module.exports = Meeting