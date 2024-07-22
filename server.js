// const http = require('http')
const  app = require('./app')
const express = require('express')
const morgan = require('morgan')
// const morgan 

const port = process.env.PORT || 8001

// const server = http.createServer(app)

const shop = express()
shop.use(express.json())
shop.use(express.urlencoded({extended:false}))


shop.use(morgan('dev'))
shop.use('/api' , app)
shop.listen(port, () => console.log(`Shop.api app listening on port ${port}!`))


// app.listen(port , ()=>console.log(`server is running on port ${port}`))