import express from "express";
import routes from "../routes";
import { home,search } from "../controllers/videoController";
import { getJoin,postJoin, getLogin,postLogin,logout } from "../controllers/userController";
const globalRouter = express.Router();


//moved to controller
// globalRouter.get(routes.home, (req, res) => res.send('Home'));
// globalRouter.get(routes.search, (req, res) => res.send('search'));
// globalRouter.get(routes.join, (req, res) => res.send('Join'));
// globalRouter.get(routes.login, (req, res) => res.send('Login'));
// globalRouter.get(routes.logout, (req, res) => res.send('Logout'));


globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);


globalRouter.get(routes.home, home);
globalRouter.get(routes.search,search);
globalRouter.get(routes.logout, logout);





export default globalRouter;