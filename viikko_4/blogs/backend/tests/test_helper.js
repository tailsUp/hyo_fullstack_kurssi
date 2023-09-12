const Blogs = require('../models/blogs')
const User = require('../models/users')

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
  const blogs = new Blogs({ title: 'title', author: 'author',url: 'www.url.com', like: 0, user: '' })
  await blogs.save()
  await blogs.remove()

  return blogs._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blogs.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
    initialBlogs, nonExistingId, blogsInDb, usersInDb,
  }