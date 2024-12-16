const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../util/db')

class Blog extends Model {}

Blog.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  author: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  url: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  /*created_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  },*/
  year: {
    type: DataTypes.INTEGER,
    validate: {
      customValidator(value) {
        console.log('VALUE TO VALIDATOR IS: ', value)
        let current = new Date().getFullYear()
        if (value < 1991 || value > current) {
          throw new Error('yearError');
        }
      }
    }
  }
}, {
  sequelize,
  underscored: true,
  timestamps: true,
  createdAt: true,
  updateAt: 'updateTimestamp',
  modelName: 'blog'
})

module.exports = Blog
