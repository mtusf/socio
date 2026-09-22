import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js"
import registerMiddleware from "../middlewares/register.middleware.js";
import { registerUser } from "../controllers/user.controller.js";
import checkAvatar from "../middlewares/avatar.middleware.js";
const router = Router();
router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerMiddleware,
    checkAvatar,
    registerUser)
export default router