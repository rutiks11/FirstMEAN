// import express module
const express = require('express');
// object of express class
app = express();

// import Mongodb Module
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
// Object creation
const client = new MongoClient(url);

//Handling cors
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin",
  "http://localhost:4200");

  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-with, Content-Type, Accept");

  next();
});

app.listen(5100,function(){
  console.log("Marvellous Server Started SuccessFully");
});

app.get('/',function(req,res){
  res.send("Marvellous Server is Live Now");
})


app.get('/getBatches',readData);

////////////////////////////////////////////////////
//  getConnection
//  Used to connect with MongoDbServer --> Database
////////////////////////////////////////////////////

async function getConnection()
{
  // connect button
  let result = await client.connect();
  let db =  result.db("Marvellous");
  return db.collection("Batches");
}

///////////////////////////////////////////////////
// readData
// Used to read the data from database
///////////////////////////////////////////////////
async function readData(req,res)
{
  let data = await getConnection();
  data = await data.find().toArray();
  console.log("Data from Marvellous Database");
  res.send(data);
}
