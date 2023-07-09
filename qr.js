const express = require('express');
const app = express();
var qr = require('qr-image');
const bodyParser = require('body-parser');
const fs = require('fs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/qr.html");
})

app.post("/",function(req,res){
    var url = req.body.url;
    var qr_png = qr.image(url);
    qr_png.pipe(require('fs').createWriteStream('newqr.png'));
    setTimeout(function(){
        res.sendFile(__dirname+"/newqr.png");
    },1000);
    
})


app.listen(3000,function(){
    console.log("Server has started at 3000 PORT.")
})