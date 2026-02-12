const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
    'db_apiarticles',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)
module.exports = sequelize