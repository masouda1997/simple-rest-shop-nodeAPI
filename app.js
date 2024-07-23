const express = require('express')
const productRoutes = require('./api/routes/products')
const ordersRoutes = require('./api/routes/orders')


const app = express();


// CORS Error
app.use((req,res,next) => {
   res.header("Access-Control-Allow-Origin" , "*")
   res.header("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type, Accept, Authorization")
   if(req.method === 'OPTIONS'){ //Browsers send a preflight OPTIONS request before the actual request to check if the actual request is safe to send. This is common for HTTP methods like PUT, DELETE, and others that can modify server data.
      res.header("Access-Control-Allow-Methods" , "GET, DELETE, POST, PUT, PATCH")
      return res.status(200).json({})
   }
   next()
})


app.use('/products' , productRoutes)
app.use('/orders' , ordersRoutes)


// app.use('/guide',(req,res ,next) => {res.status(200).send('api route contain these routes : \n /products \n /orders')})
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

