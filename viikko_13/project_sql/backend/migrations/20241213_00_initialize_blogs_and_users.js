/*
BLOGS:
  "id": 1,
  "author": "author_update_postman",
  "url": "www.lru.com",
  "title": "title",
  "likes": 22,
  "username": "username2",
*/

/*
USER:
  "id": 2,
  "username": "username2",
  "name": "name2",
  "password": "root",
  "createdAt": "2024-12-05T11:57:43.823Z",
  "updateTimestamp": "2024-12-05T11:57:43.823Z",
*/
const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    //BLOGS:
    await queryInterface.createTable('blogs', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      author: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      url: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      /*user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },*/
      created_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true
      }
    })
    //USERS:
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true
      }
    })
    await queryInterface.addColumn('blogs', 'user_id', {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 
        { 
            model: 'users', 
            key: 'id' 
        },
    })
    },
    down: async ({ context: queryInterface }) => {
        //await queryInterface.dropTable('notes')
        await queryInterface.dropTable('blogs')
        await queryInterface.dropTable('users')
    },
}