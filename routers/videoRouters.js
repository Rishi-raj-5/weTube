import express from "express";
import routes from "../routes";
import { getUpload,postUpload,videos ,videoDetail, editVideo, deleteVideo} from "../controllers/videoController";
import { uploadVideo } from "../middleware";


const videoRouter = express.Router();
videoRouter.get(routes.upload,getUpload);

videoRouter.post(routes.upload,uploadVideo,postUpload);


videoRouter.get(routes.editVideo(),editVideo);
videoRouter.get(routes.deleteVideo(),deleteVideo);
videoRouter.get(routes.videoDetail(),videoDetail);


export default videoRouter;