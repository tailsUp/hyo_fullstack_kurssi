const router = require('express').Router()
const Sequelize = require('sequelize')
const { DATABASE_URL } = require('../util/config')
const _error = require('../util/errorHandler')
const { Blog } = require('../models')
const {logger } = require('../util/simpleLogger')
/**
 * Tehtävä 13.16.
 * 
 * Palauttaa taulukon joka sisältää kaikki blogit niiden author arvojen mukaan.
 * 
 * Käytetty esimerkkinä: 
 * sum: https://stackoverflow.com/questions/56538035/finding-sum-and-grouping-in-sequelize
 * sum: https://stackoverflow.com/questions/57547714/sequelize-get-sum-of-colum-typeerror-cannot-read-property-includes-of-undef
 * sum: [sequelize.fn("sum", sequelize.col("amount")), "total_amount"],
 * 
 * Bonus task: order the data returned based on the number of likes, do the ordering in the database query.
 * 
 */
router.get('/', async (req, res, next) => {
  logger('Haetaan kaikki blogien authorit')
  const seq = new Sequelize(DATABASE_URL)
  try
  {
    const authors = await Blog.findAll(
    {
      attributes: 
      [
        'author',
        //[sequelize.fn(FUNKTIO TÄSSÄ, KENTTÄ TÄSSÄ), KENTÄN NIMI],
        [seq.fn('COUNT', 'blogs'), 'blogs'],
        [seq.fn('SUM', seq.col('likes')), 'likes']
      ],
      group: ['author'],
      order: [ ['likes', 'DESC'] ],
    })
    res.json(authors)
  }
  catch(err)
  {
    return _error.errorHandler({ name: 'errorX' }, req, res, next)
  }
})

module.exports = router
