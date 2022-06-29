const imageService = require('../services/imageService')

class ImageController {
    async uploadUserImages (req, res) {
        const dataArray = req.files.img
        const { userID } = req.params
        try {
            const result = await imageService.writeToDirectory(dataArray, userID)
            res.send(result)
        } catch(err) {
            res.send(err.message)
        }
  
    }
}

module.exports = new ImageController()