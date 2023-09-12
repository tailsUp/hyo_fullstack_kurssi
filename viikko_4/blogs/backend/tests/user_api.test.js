const supertest = require('supertest')
const bcrypt = require('bcrypt')
const User = require('../models/users')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)

/**
 * Kaikki viikon 4 pakolliset käyttäjätestit.
 */
describe('All tests relating to app-users', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', name: 'rootName', passwordHash })

    await user.save()
  })

  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb()
    const passwordHash = await bcrypt.hash('salainen', 10)

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      passwordHash: passwordHash,
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })

  /**
   * Tee myös testit, jotka varmistavat, että virheellisiä käyttäjiä ei luoda, ja että virheellisen käyttäjän 
   * luomisoperaatioon vastaus on järkevä statuskoodin ja virheilmoituksen osalta.
   */
  test('creation fails with proper statuscode and message if username already taken', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'root',
      name: 'Superuser',
      passwordHash: 'salainen',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('expected `username` to be unique')

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length)
  })
})
