/**
 * Blog can have one user, but user can have multiple blogs.
 * 
 * This class ties together single user for blog. 
 * 
 */

const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class UserBlog extends Model {}

UserBlog.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_username: {
    type: DataTypes.TEXT,
    allowNull: false,
    //references: { model: 'users', key: 'username' },
    references: { model: 'users', key: 'user_id' },
    //references: { model: 'users', key: 'id' },
  },
  blog_username: {
    type: DataTypes.TEXT,
    allowNull: false,
    //references: { model: 'blogs', key: 'username' },
    references: { model: 'blogs', key: 'user_id' },
    //references: { model: 'blogs', key: 'id' },
  },
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'userBlog'
})

module.exports = UserBlog