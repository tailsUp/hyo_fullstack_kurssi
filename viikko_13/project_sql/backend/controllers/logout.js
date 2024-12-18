const router = require('express').Router()
const { findUserByID, findSessionByUserId } = require('../util/finders')
const _error = require('../util/errorHandler')
const { logger } = require('../util/simpleLogger')

router.delete('/:id', async (req, res, next) => {
    logger('LOGOUT')
    const _id = req.params.id
    const user = await findUserByID(_id)
    const sess = await findSessionByUserId(_id)
    if (!(user))
    {
        return _error.errorHandler({ name: 'noUser' }, req, res, next)
    }
    if (!(sess))
    {
        return _error.errorHandler({ name: 'noSession' }, req, res, next)
    }
    await sess.destroy()
    // you don't return a response with that status, then 204 or 205 would be more appropriate
    res.send({ message: "User has been logged out!" }).status(205)
})

module.exports = router