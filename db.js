// import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost:27017/we-tube");

// const db =mongoose.connection;

// const handleOpen = () => console.log("MongoDB connected successfully");


// db.once("open", handleOpen);

import mongoose from "mongoose";

// Replace this with your MongoDB connection string
const uri = "mongodb://localhost:27017/we-tube";

// Connect to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("MongoDB connected successfully");
const handleError = (error) => console.log("MongoDB connection error:", error);

// Listen for the open and error events
db.once("open", handleOpen);
db.on("error", handleError);
