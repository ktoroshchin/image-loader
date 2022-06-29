const app = require('express')
const router = app.Router()
const imageController = require('../controllers/imageController')

module.exports = () => {
   router.post('/upload/:userID', imageController.uploadUserImages)

   return router
}