//require('dotenv').config()

const dotenv = require("dotenv");
dotenv.config();

const PORT = dotenv.PORT

const MONGODB_URI = dotenv.NODE_ENV === 'test' 
  ? dotenv.TEST_MONGODB_URI
  : dotenv.MONGODB_URI

module.exports = {
  MONGODB_URI,
  PORT
}

/*const PORT = process.env.PORT

const MONGODB_URI = process.env.NODE_ENV === 'test' 
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI

module.exports = {
  MONGODB_URI,
  PORT
}*/