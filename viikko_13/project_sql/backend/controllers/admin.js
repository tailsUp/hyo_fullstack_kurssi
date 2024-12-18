const router = require('express').Router()
const { User } = require('../models')
const { tokenExtractor, sessionExtractor } = require('../util/extractors')
const { findUserByUsername } = require('../util/finders')
const _error = require('../util/errorHandler')

const isAdmin = async (req, res, next) => {
    const user = await User.findByPk(req.decodedToken.id)
    if (!user.admin)
    {
        return _error.errorHandler({ name: 'errorX' }, req, res, next)
    }
    next()
}

/**
 * Funktio päivittää käyttäjän disabled tiedon.
 */
router.put('/:username', tokenExtractor, sessionExtractor, isAdmin, async (req, res, next) => {
    const _username = req.params.username
    const user = await findUserByUsername(_username)

    if (user)
    {
        user.disabled = req.body.disabled
        await user.save()
        res.json(user)
    } 
    else
    {
        return _error.errorHandler({ name: 'errorX' }, req, res, next)
    }
})