import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middleware";

import cookieParser from "cookie-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouters";
import routes from "./routes";
const app = express();

//view engine
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"))

//middlewares
app.use(helmet());// allows to have more security
app.use(cookieParser()); //is the one takes the cookies and makes them available to us
app.use(bodyParser.json()); //is the one to check what content is user sending to the  website
app.use(bodyParser.urlencoded({extended: true})); //
app.use(morgan("dev")); //



app.use(localsMiddleware);

app.use(routes.home, globalRouter);  
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


export default app;