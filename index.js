/*
var index1=require("./index1")

index1.a()
console.log("index 1")*/


var express=require("express")
var bodyParser = require('body-parser')
var app=express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/person/:id",function(req,res){
    console.log("requ",req.params['id'])
    res.send("hii my first route")
})


app.get("/person",function(req,res){
    var query=req.query
    console.log("query is ",query.name)
    res.send("person router")
})


app.post("/person",function(req,res){
    var name=req.body.name
    var age=req.body.age
    console.log("name is ",name)
    console.log("age is ",age)
    res.send("this is post call for person")

})

app.delete("/person",function(req,res){
    res.send("this is delete call for person")
})

app.put("/person",function(req,res){
    res.send("this is put call for person")
})

app.listen(8080)
console.log("start at 8080")