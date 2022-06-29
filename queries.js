const Pool = require('pg').Pool

const pool = new Pool({
  user: 'konstantin',
  host: 'localhost',
  database: 'imageloader',
  password: 'humble',
  port: 5432,
})

// pool.connect()

function uploadImg(name, img) {
   return pool.query('INSERT INTO images (name, img) VALUES ($1, $2) RETURNING *', [name, img])
   .then(res => {
      console.log(res.rows)
      return res.rows
    })
    .catch(err => {
      console.log('ERROR', err)
    })
}

function fetchImage(id) {
  return pool.query('SELECT * FROM IMAGES WHERE id = $1', [id])
  .then(res => {
    console.log(res.rows[0])
    return res.rows[0]
  })
}



module.exports = {
  uploadImg,
  fetchImage,
}

