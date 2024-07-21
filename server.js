// const http = require('http')
// const  app= require('./app')
const express = require('express')

const port = process.env.PORT || 8001

// const server = http.createServer(app)

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))()


server.listen(port , ()=>console.log(`server is running on port ${port}`))