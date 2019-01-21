const db = require('./db')
const Restaurant = require('./Restaurant')
const Meeting = require('./Meeting')

Meeting.belongsTo(Restaurant);
Restaurant.hasMany(Meeting);

module.exports = {
  db,
  User,
  Restaurant
};