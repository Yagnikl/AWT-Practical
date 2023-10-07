const express = require('express');
const helmet = require('helmet');
const https = require('https');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(helmet());

app.use(express.urlencoded({
    extended : true
}))

app.get('/', (req, res) => {
    res.send("Hello");
})

// app.get('/api/', (req, res)=> {
//     res.send("Api is available");
// })

const sslServer = https.createServer({
    key : fs.readFileSync(path.join(__dirname, 'certi' , 'key.pem')),
    cert : fs.readFileSync(path.join(__dirname,'certi', 'cert.pem')) 
},app)

sslServer.listen(3002, ()=>{
    console.log("Server listening on port 8080");
})