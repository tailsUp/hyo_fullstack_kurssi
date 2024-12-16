const Blog = require('./blog')
const User = require('./user')
const UserBlog = require('./userBlog')

//Models:
User.hasMany(Blog)
Blog.belongsTo(User, { through: UserBlog })
//Sync:
//User.sync({ alter: true })
//Blog.sync({ alter: true })
//Export:
module.exports = {
  Blog,
  User,
  UserBlog,
}