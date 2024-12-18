const router = require('express').Router()
const { Note } = require('../models')
const { User } = require('../models')
const { tokenExtractor, sessionExtractor } = require('../util/extractors')
const { noteFinder } = require('../util/finders')

router.get('/', async (req, res) => {
    const notes = await Note.findAll({
      attributes: 
      { 
        exclude: ['userId'] 
      },
      include: 
      {
        model: User,
        attributes: ['name']
      }
    })
    res.json(notes)
  })
  
  router.post('/', tokenExtractor, sessionExtractor, async (req, res) => {
    try {
      const user = await User.findByPk(req.decodedToken.id)
      const note = await Note.create({...req.body, userId: user.id, date: new Date()})
      res.json(note)
    } 
    catch(error)
    {
      return res.status(400).json({ error })
    }
  })

router.get('/:id', noteFinder, async (req, res) => {
    if (req.note) {
        res.json(req.note)
    }
    else
    {
        res.status(404).end()
    }
})
  
router.delete('/:id', tokenExtractor, sessionExtractor, noteFinder, async (req, res) => {
    if (req.note)
    {
        await req.note.destroy()
    }
    res.status(204).end()
})
  
router.put('/:id', tokenExtractor, sessionExtractor, noteFinder, async (req, res) => {
    if (req.note)
    {
      req.note.important = req.body.important
      await req.note.save()
      res.json(req.note)
    }
    else
    {
        res.status(404).end()
    }
})

module.exports = router