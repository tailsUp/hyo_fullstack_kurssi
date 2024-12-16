/**
 * Blog can have one user, but user can have multiple blogs.
 * 
 * This class ties together blogs for users. 
 * 
 */

const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class BlogUser extends Model {}

BlogUser.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_username: {
    type: DataTypes.TEXT,
    allowNull: false,
    references: { model: 'users', key: 'id' },
  },
  blog_username: {
    type: DataTypes.TEXT,
    allowNull: false,
    references: { model: 'blogs', key: 'id' },
  },
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'blogUser'
})

module.exports = BlogUser
