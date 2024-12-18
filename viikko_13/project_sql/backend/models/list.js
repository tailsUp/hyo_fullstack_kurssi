const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../util/db')

class List extends Model {}

List.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  blogId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  isRead: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'list'
})

module.exports = List