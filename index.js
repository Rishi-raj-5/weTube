import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";


// const express = require('express')
const app = express()
const PORT= 4000;

// function handleListening (){
//     console.log(`Listening on: http://localhost:${PORT}`)
// }

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);


// function handleHome(){
//     console.log(`Hii from Home`)
// }

// function handleHome(req, res){
//     console.log(`Hii from Home`);
//     res.send("Hello from Home");
// }
const handleHome = (req, res) => res.send("Hello from Home");


// function handleProfile(req, res){
//     console.log(`You are on my profile`);
//     res.send("You are on my Profile");
// }

const handleProfile = (req, res) => res.send("You are on my Profile");
// const betweenHome = (req, res, next) => {
//     console.log("You are on my between");
//     next();
// }

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));



// app.use(betweenHome);
app.get("/", handleHome);
// app.get("/",betweenHome, handleHome);
app.get("/profile", handleProfile);
// respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello world')
// })

app.listen(PORT, handleListening);