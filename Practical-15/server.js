const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("HEllo");
    res.send("Hello")
})

app.listen(8000,()=>{
    console.log("Server listening on port 8000");
});