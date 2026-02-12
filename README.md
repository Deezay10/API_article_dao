# Voici mon API article avec des DAO :

### Dans src/routes, il y a toutes les routes : 
- get "/articles" pour avoir la liste des articles
- post "/article-update" pour créer un article ou modifier un article existant
- delete "/article/:uid" pour supprimer un article
- get "/article/:uid" pour obtenir un seul article en particulier

### Pour les Data Access Object (DAO), il y a :
- Mongoose pour MongoDB
- Sequelize pour MySQL
- Mock (en production)
