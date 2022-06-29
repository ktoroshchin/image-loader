const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const fileUpload = require('express-fileupload')
// const { uploadImg, fetchImage } = require('./queries.js')
const imageRouter = require('./router/imageRouter')
const PORT = 8080

app.use(fileUpload())
app.use('/', express.static(path.join(__dirname, 'scripts')))

//ROUTES
app.use('/api/image', imageRouter())

console.log(path.join(__dirname))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

// app.get('/fetch-image/:id', async (req, res) => {
//     const { id } = req.params
//     if(id) {
//         const imageData = await fetchImage(id)
//         // const stringImg = imageData.img.toString('base64')
//         // console.log('DATA',imageData.img.toString('base64'))
//         // const y = Buffer.from(imageData.img, 'base64')
//         // console.log('imagedata', y)
//         // res.writeHead(200, {
//         //     'Content-Type': 'image/png',
//         //     'Content-Length': imageData.img.length
//         //   });
//         const imgBuf = imageData.img.toString('base64')
//         return res.send(imgBuf)
//     }
// })

// app.post("/upload-image/", async (req, res) => {
//     //  const result = await uploadImg(name, data)
    

// })

app.listen(PORT, () => console.log(`LISTENING on PORT ${PORT}`))