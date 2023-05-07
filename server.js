const express = require('express'); 
const app = express(); 
const axios = require('axios')


app.set('view engine', 'ejs');
factsArr = []


app.get("/", (req, res) => {
    //render the app.ejs file on calling the route
    res.render('app');
    
    axios.get('http://dog-api.kinduff.com/api/facts?number=20')
    .then(resp=>{console.log(resp.data)
    factsArr = resp.data
    })
    .catch(err=>console.log(err))
  });
app.post("/get",(req,res)=>{
  res.send(factsArr)
})

//add the router 
// app.use('/', router); 
app.listen(process.env.port || 3000); 
console.log('Running at Port 3000'); 