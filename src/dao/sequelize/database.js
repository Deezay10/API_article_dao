const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
    'db_apigames',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)
module.exports = sequelize