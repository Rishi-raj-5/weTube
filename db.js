
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


mongoose.connect(process.env.Mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("MongoDB connected successfully");
const handleError = (error) => console.log("MongoDB connection error:", error);

// Listen for the open and error events
db.once("open", handleOpen);
db.on("error", handleError);
