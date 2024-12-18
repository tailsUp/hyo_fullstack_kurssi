const Blog = require('./blog')
const User = require('./user')
const UserBlog = require('./userBlog')
const List = require('./list')
const Session = require('./session')

//Models:
User.hasMany(Blog)
Blog.belongsTo(User, { through: UserBlog })

User.belongsToMany(Blog, { through: List, as: 'readings' })

User.hasOne(Session)
Session.belongsTo(User)

//Sync:
//User.sync({ alter: true })
//Blog.sync({ alter: true })
//Export:
module.exports = {
  Blog,
  User,
  UserBlog,
  List,
  Session,
}