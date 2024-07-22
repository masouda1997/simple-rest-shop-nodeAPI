const express = require('express')
const productRoutes = require('./api/routes/products')
const ordersRoutes = require('./api/routes/orders')


const app = express();

app.use('/',(req,res) => {res.status(200).send('api route contain these routes : \n /products \n /orders')})
app.use('/products' , productRoutes)
app.use('/orders' , ordersRoutes)

module.exports = app
