/**
 * Esimerkki funktio testejä varten. Palauttaa aina 1.
 * @param {Array} blogs - array.
 * @returns             - 1.
 */
const dummy = (blogs) => {
  console.log('ESIMERKKI ', blogs)
  return 1
}

/**
 * Funtkio laskee blogien saamat tykkäykset.
 * @param {Array} blogs - array.
 * @returns             - tykkäysten määrän.
 */
const totalLikes = (blogs) => {
  if (blogs === undefined)
    return undefined
  return blogs.reduce(function (sumOfLikes, blog) {
    return sumOfLikes + blog.likes
  }, 0)
}

/**
 * Funktio etsii suosituimmain blogin ja palauttaa olion joka sisältää nimen, tekijän ja tykkäykset.
 * @param {Array} blogs - array. 
 * @returns             - olion joka sisältää nimen, tekijän ja tykkäykset.
 */
const favoriteBlog = (blogs) => {
  if (blogs === undefined || blogs.length === 0)
    return undefined
  let temp = {}
  blogs.reduce(function (compare, blog) {
    if (blog.likes >= compare) 
    {
      temp = blog
      return blog.likes
    }
    return compare
  }, 0);
  return { title: temp.title, author: temp.author, likes: temp.likes }
}

/**
 * Funtkio palauttaa aktiivisimman blogien tekijän.
 * @param {Array} blogs - array.
 * @returns             - olio {author: "", blogs: kpl}
 */
const mostProfilicBlogger = (blogs) => {
  if (blogs === undefined || blogs.length === 0)
    return undefined
  let map=new Map();
  blogs.forEach((blog) => {
      if(map.has(blog.author)) 
      {
        map.set(blog.author, map.get(blog.author)+1);
      }
      else 
      {
        map.set(blog.author, 1);  
      }
    }
  )
  map =  new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  const x = map.entries().next().value;
  return {author: x[0], blogs: x[1]}
}

/**
 * Funktio palauttaa bloggaajan joka on saanut kaikkiaan eniten tykkäyksiä.
 * @param {Array} blogs - array. 
 * @returns             - olio {authoer: "", likes: kpl}
 */
const mostLikes = (blogs) => {
  if (blogs === undefined || blogs.length === 0)
    return undefined
  let map=new Map();
  blogs.forEach((blog) => {
      if(map.has(blog.author)) 
      {
        map.set(blog.author, map.get(blog.author)+blog.likes);
      }
      else 
      {
        map.set(blog.author, blog.likes);  
      }
    }
  )
  map =  new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  const x = map.entries().next().value;
  return {author: x[0], likes: x[1]}
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostProfilicBlogger,
  mostLikes,
}