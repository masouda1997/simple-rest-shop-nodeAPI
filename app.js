const express = require('express')
const productRoutes = require('./api/routes/products')
const ordersRoutes = require('./api/routes/orders')


const app = express();

// app.use('/',(req,res) => {res.status(200).send('api route contain these routes : \n /products \n /orders')})
app.use('/products' , productRoutes)
app.use('/orders' , ordersRoutes)

app.use((req,res,next)=>{
   const error = new Error('Not found')
   // we can use the comment code to show the automatic error handler works 
   // error.status(404)
   error.status = 404
   next(error)
})
// for the time that custom errors nowt handle 
app.use((error ,req,res,next)=> {
   res.status(error.status || 500)
   res.json({
      error:{
         msg:error.message
      }
   })
})

module.exports = app
