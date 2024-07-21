const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
	res.status(200).json({
		msg: "GET request to /products",
	});
});

router.post("/", (req, res, next) => {
	res.status(201).json({ msg: "POST request to /products" });
});

router.get('/:productId',(req,res,next)=>{
   const id  = req.params.productId
   if(id === 'special'){
      res.status(200).json({
         msg:"you find the special ID",
         id:id
      })
   }else{
      res.status(200).json({
         msg:"you passed an ID"
      })
   }
})

router.patch("/:productId", (req, res, next) => {
	res.status(200).json({
		msg: "updated product",
	});
});

router.delete("/:productId", (req, res, next) => {
	res.status(200).json({
		msg: "deleted Product",
	});
});

module.exports = router;
