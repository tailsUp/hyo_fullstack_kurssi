const router = require('express').Router()
const { User } = require('../models')
const { tokenExtractor } = require('../util/extractors')


const isAdmin = async (req, res, next) => {
    const user = await User.findByPk(req.decodedToken.id)
    if (!user.admin)
    {
        return res.status(401).json(
        { 
            error: 'operation not allowed' 
        })
    }
    next()
}
  
router.put('/:username', tokenExtractor, isAdmin, async (req, res) => {
    const user = await User.findOne(
    {
        where: 
        {
            username: req.params.username
        }
    })

    if (user)
    {
        user.disabled = req.body.disabled
        await user.save()
        res.json(user)
    } 
    else
    {
        res.status(404).end()
    }
})