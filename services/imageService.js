// const uid = require('../helpers/uid')
const fs = require('fs')
const uid = require('../helpers/uid')

class ImageService {
    writeToDirectory(imagesArray, userID) {
        return new Promise((resolve, reject) => {
            const folder = 'images'
            if(imagesArray.length > 2) return reject(new Error('only 2 files can be uploaded'))
            for(let obj of imagesArray) {
                const { name, data, size, mimetype, md5, mv } = obj
                const ext = mimetype.split('/').slice(1)[0]
    
                //IF DIRECTORY WITH USERID DO NOT EXIST, CREATE
                if(!fs.existsSync(folder + `/${userID}`)) {
                    console.log('DATA', data)
                    fs.mkdirSync(folder + `/${userID}`)
                }
    
                fs.writeFileSync(`${folder}/${userID}/${uid()}.${ext}`, data)
            }

            resolve('Files uploaded succesfully')
        })
    }
}

module.exports = new ImageService()