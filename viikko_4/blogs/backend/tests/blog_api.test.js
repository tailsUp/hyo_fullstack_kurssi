const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const Blogs = require('../models/blogs')
const api = supertest(app)

/*describe('Week 4 tests for assignments 4.3 - 4.12', () => {
    beforeEach(async () => {
        await Blogs.deleteMany({})
        await Blogs.insertMany(helper.initialBlogs)
    })

    test('TEST: blogs are returned as json', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })

    test('TEST: initalBlogs matches the db response in length', async () => {
        const response = await api.get('/api/blogs')
        expect(response.body).toHaveLength(helper.initialBlogs.length)
    })

    test('TEST: returned blog contains title with right title', async () => {
        const response = await api.get('/api/blogs')
        const contents = response.body.map(r => r.title)

        expect(contents).toContain('TEST TITLE 111')
    })

    test('TEST: new blog-object can be saved ', async () => {
        const newBlog =
        {
            title: 'TEST TITLE 333',
            author: 'TESTU AUTHOR 333',
            url: 'WWW.TEST.COM/333',
            likes: 333,
        }

        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const blogsAtEnd = await helper.blogsInDb()
        expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

        const contents = blogsAtEnd.map(n => n.title)
        expect(contents).toContain('TEST TITLE 333')
    })

    test('TEST: blog-object without title CAN NOT be added', async () => {
        const newBlogs =
        {
            title: '',
            author: 'TESTU AUTHOR 111',
            url: 'WWW.TEST.COM/111',
            likes: 111,
        }

        await api
            .post('/api/blogs')
            .send(newBlogs)
            .expect(400)

        const blogsAtEnd = await helper.blogsInDb()
        expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
    })

    test('TEST: a specific blog can be viewed', async () => {
        const blogsAtStart = await helper.blogsInDb()
        const blogToView = blogsAtStart[0]

        const resultBlogs = await api
            .get(`/api/blogs/${blogToView.id}`)
            .expect(200)
            .expect('Content-Type', /application\/json/)
        expect(resultBlogs.body).toEqual(blogToView)
    })

    test('TEST: blog can be DELETED', async () => {
        const blogsAtStart = await helper.blogsInDb()
        const blogToDelete = blogsAtStart[0]

        await api
            .delete(`/api/blogs/${blogToDelete.id}`)
            .expect(204)

        const blogsAtEnd = await helper.blogsInDb()
        expect(blogsAtEnd).toHaveLength(
            helper.initialBlogs.length - 1
        )

        const contents = blogsAtEnd.map(r => r.title)
        expect(contents).not.toContain(blogToDelete.title)
    })

    test('TEST: objects identifying id field is called id', async () => {
        const response = await api.get('/api/blogs')
        const contents = response.body.map(r => Object.keys(r))
        expect(contents[0]).toContain('id')
    })

    test('TEST: new object without likes has its likes set to zero automatically', async () => {
        const newBlogs =
        {
            title: 'TITLE NO LIKES',
            author: 'UNLIKED AUTHOR',
            url: 'WWW.LIKESDONTEXIST.COM/',
        }

        await api
            .post('/api/blogs')
            .send(newBlogs)
            .expect(201)

        const blogsAtEnd = await helper.blogsInDb()
        const last = blogsAtEnd[blogsAtEnd.length - 1]
        expect(last.likes).toEqual(0)
    })
})*/