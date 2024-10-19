const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const Blogs = require('../models/blogs')
const Users = require('../models/users')
const api = supertest(app)
let ROOT = ''

/**
 * Kaikki viikon 4 testit liittyen blogien luomiseen, muokkaamiseen, poistamiseen jne.
 */
describe('ALL REQUIRED BLOG TESTS FOR WEEK 4', () => {
    beforeEach(async () => {
        await Blogs.deleteMany({})                                                  //Poistetaan vanhat
        ROOT = await Users.collection.findOne({"username": 'root'})                 //Haetaan rootkäyttäjä
        const testBlogs = helper.setUserIdForBlogs(ROOT._id, helper.initialBlogs)   //Asetetaan root_id blogeille.
        await Blogs.insertMany(testBlogs)                                           //Laitetaan blogit tietokantaan Vikko4Test
    })

    test('TEST 1: blogs are returned as json', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('TEST 2: initalBlogs matches the db response in length', async () => {
        const response = await api.get('/api/blogs')
        expect(response.body).toHaveLength(helper.initialBlogs.length)
    })

    test('TEST 3: returned blog contains title with right title', async () => {
        const response = await api.get('/api/blogs')
        const contents = response.body.map(r => r.title)

        expect(contents).toContain('TEST TITLE 111')
    })

    test('TEST 4: new blog-object can be saved ', async () => {
        const newBlog =
        {
            title: 'TEST TITLE 333-333',
            author: 'TESTU AUTHOR 333-333',
            url: 'WWW.TEST.COM/333-333',
            likes: 333333,
            user: ROOT._id,
        }

        await api
            .post('/api/blogs')
            .auth(`${process.env.TEST_TOKEN}`, { type: 'bearer' })
            .send(newBlog)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const blogsAtEnd = await helper.blogsInDb()
        expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

        const contents = blogsAtEnd.map(n => n.title)
        expect(contents).toContain('TEST TITLE 333-333')
    })

    test('TEST 5: blog-object without title CAN NOT be added', async () => {
        const newBlogs =
        {
            title: '',
            author: 'TESTU AUTHOR 111-111',
            url: 'WWW.TEST.COM/111-111',
            likes: 111,
            user: ROOT._id,
        }
        
        await api
            .post('/api/blogs')
            .auth(`${process.env.TEST_TOKEN}`, { type: 'bearer' })                              //Tässä asetetaan Authorization headeriin.
            .send(newBlogs)
            .expect(400)

        const blogsAtEnd = await helper.blogsInDb()
        expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
    })

    test('TEST 6: a specific blog can be viewed', async () => {
        const blogsAtStart = await helper.blogsInDb()
        const blogToView = blogsAtStart[0]

        const resultBlogs = await api
            .get(`/api/blogs/${blogToView.id}`)
            .expect(200)
            .expect('Content-Type', /application\/json/)
        expect(resultBlogs.body.id).toEqual(blogToView.id)
    })

    test('TEST 7: blog can be DELETED', async () => {
        const blogsAtStart = await helper.blogsInDb()
        const blogToDelete = blogsAtStart[0]

        await api
            .delete(`/api/blogs/${blogToDelete.id}`)
            .auth(`${process.env.TEST_TOKEN}`, { type: 'bearer' })                         
            .expect(204)

        const blogsAtEnd = await helper.blogsInDb()
        expect(blogsAtEnd).toHaveLength(
            helper.initialBlogs.length - 1
        )

        const contents = blogsAtEnd.map(r => r.title)
        expect(contents).not.toContain(blogToDelete.title)
    })

    test('TEST 8: objects identifying id field is called id', async () => {
        const response = await api.get('/api/blogs')
        const contents = response.body.map(r => Object.keys(r))
        expect(contents[0]).toContain('id')
    })

    test('TEST 9: new object without likes has its likes set to zero automatically', async () => {
        const newBlogs =
        {
            title: 'TITLE NO LIKES',
            author: 'UNLIKED AUTHOR',
            url: 'WWW.LIKESDONTEXIST.COM/',
            user: ROOT._id
        }

        await api
            .post('/api/blogs')
            .auth(`${process.env.TEST_TOKEN}`, { type: 'bearer' })
            .send(newBlogs)
            .expect(201)

        const blogsAtEnd = await helper.blogsInDb()
        const last = blogsAtEnd[blogsAtEnd.length - 1]
        expect(last.likes).toEqual(0)
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })
})