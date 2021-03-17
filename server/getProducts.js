const products=require('../products.json')
const getProducts= (req,res) =>{
   
    if(req.query.price){
     const things=things.filter((val)=>val.price>=parseInt(param.req.query))   
       
        return res.status(200).send(things)
    }
    res.status(200).send(products)
}




module.exports=getProducts