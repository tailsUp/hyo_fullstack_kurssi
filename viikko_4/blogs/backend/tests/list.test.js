const listHelper = require('../utils/listHelper')
const multipleTestBlogs = require('./listOfTestBlogs')

/**
 * Viikon 4 pakollisia harjoituksia testien tekemiseen.
 */
describe('TEHTÄVÄ 4.3', () => {
    test('dummy returns one', () => {
        const blogs = []

        const result = listHelper.dummy(blogs)
        expect(result).toBe(1)
    })
})

describe('TEHTÄVÄ 4.4', () => {
    const listWithOneBlog = multipleTestBlogs.listWithOneBlog

    test('Undefined', () => {
        const result = listHelper.totalLikes()
        expect(result).toBe(undefined)
    })

    test('Empty list', () => {
        const result = listHelper.totalLikes([])
        expect(result).toBe(0)
    })

    test('List with 1 blog', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })

    test('List with multtiple blogs', () => {
        const result = listHelper.totalLikes(multipleTestBlogs.blogs)
        expect(result).toBe(36)
    })
})

describe('TEHTÄVÄ 4.5', () => {
    const listWithOneBlog = multipleTestBlogs.listWithOneBlog

    test('Undefined', () => {
        const result = listHelper.favoriteBlog()
        expect(result).toBe(undefined)
    })

    test('Empty list', () => {
        const result = listHelper.favoriteBlog([])
        expect(result).toBe(undefined)
    })

    test('List with 1 blog', () => {
        const result = listHelper.favoriteBlog(listWithOneBlog)
        const compare1 = {title: 'Go To Statement Considered Harmful', author: 'Edsger W. Dijkstra', likes: 5,}
        expect(result).toEqual(compare1)
    })

    test('List with multtiple blogs', () => {
        const result = listHelper.favoriteBlog(multipleTestBlogs.blogs)
        const compare2 = {title: "Canonical string reduction", author: "Edsger W. Dijkstra", likes: 12,}
        expect(result).toEqual(compare2)
    })
})

describe('TEHTÄVÄ 4.6', () => {
    const listWithOneBlog = multipleTestBlogs.listWithOneBlog

    test('Undefined', () => {
        const result = listHelper.mostProfilicBlogger()
        expect(result).toBe(undefined)
    })

    test('Empty list', () => {
        const result = listHelper.mostProfilicBlogger([])
        expect(result).toBe(undefined)
    })

    test('List with 1 blog', () => {
        const result = listHelper.mostProfilicBlogger(listWithOneBlog)
        const compare1 = {author: 'Edsger W. Dijkstra', blogs: 1,}
        expect(result).toEqual(compare1)
    })

    test('List with multtiple blogs', () => {
        const result = listHelper.mostProfilicBlogger(multipleTestBlogs.blogs)
        const compare2 = {author: "Robert C. Martin", blogs: 3,}
        expect(result).toEqual(compare2)
    })
})

describe('TEHTÄVÄ 4.7', () => {
    const listWithOneBlog = multipleTestBlogs.listWithOneBlog

    test('Undefined', () => {
        const result = listHelper.mostLikes()
        expect(result).toBe(undefined)
    })

    test('Empty list', () => {
        const result = listHelper.mostLikes([])
        expect(result).toBe(undefined)
    })

    test('List with 1 blog', () => {
        const result = listHelper.mostLikes(listWithOneBlog)
        const compare1 = {author: 'Edsger W. Dijkstra', likes: 5,}
        expect(result).toEqual(compare1)
    })

    test('List with multtiple blogs', () => {
        const result = listHelper.mostLikes(multipleTestBlogs.blogs)
        const compare2 = {author: "Edsger W. Dijkstra", likes: 17,}
        expect(result).toEqual(compare2)
    })
})
