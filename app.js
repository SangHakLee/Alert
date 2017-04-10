const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({data:2})
})

app.listen(3000, () => {
  console.log('server listen')
})

module.exports = app