
const express = require('express')
const app = express()
const PORT= 4000;

function handleListening (){
    console.log(`Listening on: http://localhost:${PORT}`)
}

//const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello world')
// })

app.listen(PORT, handleListening);