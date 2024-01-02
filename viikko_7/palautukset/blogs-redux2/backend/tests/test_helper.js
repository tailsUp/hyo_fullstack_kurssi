const Blogs = require('../models/blogs')
const User = require('../models/users')

/**
 * Lyhyt lista blogi-olioita ilman userId:tä.
 */
const initialBlogs = [
    {
        title: 'TEST TITLE 111',
        author: 'TESTU AUTHOR 111',
        url: 'WWW.TEST.COM/111',
        likes: 111,
        user: '',
    },
    {
        title: 'TEST TITLE 22',
        author: 'TESTU AUTHOR 222',
        url: 'WWW.TEST.COM/222',
        likes: 222,
        user: '',
    },
]

const nonExistingId = async () => {
    const blogs = new Blogs({
        title: 'title',
        author: 'author',
        url: 'www.url.com',
        like: 0,
        user: '',
    })
    await blogs.save()
    await blogs.remove()

    return blogs._id.toString()
}

/**
 * Funktio palauttaa kaikki tietokannan blogit.
 */
const blogsInDb = async () => {
    const blogs = await Blogs.find({})
    return blogs.map((blog) => blog.toJSON())
}

/**
 * Funktio palauttaa kaikki tietokannan käyttäjät.
 */
const usersInDb = async () => {
    const users = await User.find({})
    return users.map((u) => u.toJSON())
}

/**
 * Funktio asettaa blogilistalla oleviin blogi-olioihin käyttäjätunnukset ja palauttaa
 * muokatun listan.
 * @param {String} userID - käyttäjätunnus.
 * @param {Array} blogs   - blogilista
 * @returns               - muokattu lista.
 */
const setUserIdForBlogs = (userID, blogs) => {
    blogs.forEach((blog) => {
        blog.user = userID
    })
    return blogs
}

module.exports = {
    initialBlogs,
    nonExistingId,
    blogsInDb,
    usersInDb,
    setUserIdForBlogs,
}
