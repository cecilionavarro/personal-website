const express = require('express')
const { dirname } = require('path')
const app = express()
const PORT = process.env.PORT || 5007

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(PORT, ()=> {
    console.log(`Server succesfully started on port: ${PORT}`)
})