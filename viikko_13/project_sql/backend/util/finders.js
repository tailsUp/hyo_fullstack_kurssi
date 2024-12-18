const { Blog, Note , List, User, Session } = require('../models')

/**
 * Funktio hakee blogin primarykeyn avulla.
 */
const blogFinder = async (req, res, next) => {
    req.blog = await Blog.findByPk(req.params.id)
    next()
}

/**
 * Funktio hakee listan primarykeyn avulla.
 */
const listFinder = async (req, res, next) => {
    req.list = await List.findByPk(req.params.id)
    next()
}

/**
 * Funktio hakee noten primarykeyn avulla.
 */
const noteFinder = async (req, res, next) => {
    req.note = await Note.findByPk(req.params.id)
    next()
}

/**
 * Funktio hakee käyttäjän käyttäjänimen avulla.
 */
const findByUsername = async (req, res, next) => {
    req.user = await User.findAll({
      where: {
        username: req.params.username,
      }
    })
    next()
}

/**
 * Funktio hakee käyttäjän käyttäjänimen avulla.
 */
const findUserByUsername = async (_username) => {
  const user = await User.findOne({
    where: {
      username: _username,
    }
  })
  return user
}

/**
 * Funktio etsii käyttäjän sen uniikin id:n perusteella.
 */
const findUserByID = async (_id) => {
  const user = await User.findOne({
    where: {
      id: _id
    }
  })
  return user
}

/**
 * Funktio etsii session sen uniikin id:n perusteella.
 */
const findSessionByID = async (_id, _sesId) => {
  const session = await Session.findOne(
  {
    where: {
      userId: _id,
      id: _sesId
    }
  })
  return session
}

const findSessionByUserId = async (_id) => {
  const session = await Session.findOne(
  {
    where: {
      userId: _id
    }
  })
  return session
}

module.exports = { blogFinder, noteFinder, listFinder, findByUsername, findUserByID, findSessionByID, findUserByUsername, findSessionByUserId }