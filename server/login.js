const {Router} = require("express")

const log = Router();

log.post("/",(req,res)=> 
{
    console.log(req.body);
    res.status(200).send("everything is good "+req.body.username); 
})


module.exports = log;