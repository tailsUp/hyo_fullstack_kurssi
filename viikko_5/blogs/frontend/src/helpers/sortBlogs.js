/**
 * Funktio hakee vain ne blogit joissa on sama userID täsmää funktion saamaan käyttäjään.
 */
const sortBlogsByUserID = (blogs, user) => {
  const temp = blogs.map(blog => blog.user === user.id)
  return temp
}

/**
 * Funktio korvaa listalla olevan vanhan blogin uudella blogilla id:n perusteella.
 */
const updateBlogList = (blogs, newBlog) => {
  try
  {
    return blogs.map(blog => { return blog.id === newBlog.id ? newBlog : blog })
  }
  catch (error)
  {
    return blogs
  }
}

/**
 * Funktio järjestää blogit tykkäysten perusteella suurimmasta pienimpään.
 */
const sortBlogListByLikes = (blogs) => {
  return blogs.sort((blog1, blog2) => blog2.likes - blog1.likes)
}

/**
 * Funktio palauttaa listan ilman olioita joka stemmaa annetun ID:n kanssa.
 */
const removeBlogByID = (blogs, ID) => {
  return blogs.filter((blog) => blog.id !== ID)
}

export default { sortBlogsByUserID, updateBlogList, sortBlogListByLikes, removeBlogByID }