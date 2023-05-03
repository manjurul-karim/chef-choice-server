const express = require ('express')
const app = express();
const port = process.env.PORT || 5000;

app.get ('/', (req,res) =>{
    res.send('assignmet-10')
})


app.listen(port, () =>{
    console.log(`assignment API is Running on port : ${port}`);
})