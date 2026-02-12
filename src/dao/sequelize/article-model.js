const { DataTypes } = require('sequelize')
const sequelize = require('./database')

// Création du modèle de l'article
const Article = sequelize.define('Article', {
    uid: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    }

})

module.exports = Article