const express = require('express')
const port = 3004;
const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome to server');
})

app.listen(port, ()=>{
    console.log(`server running on http://localhost/${port}`);
});
