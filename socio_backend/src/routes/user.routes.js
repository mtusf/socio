import { Router } from "express";
import { upload } from "../middlewares/upload/multer.middleware.js"
import registerMiddleware from "../middlewares/register.middleware.js";
import { registerUser } from "../controllers/user.controller.js";
import checkAvatar from "../middlewares/upload/avatar.middleware.js";
import loginValidation from "../middlewares/auth/login.middleware.js";
import login from "../controllers/authentication_controllers/login.controller.js";
import logout from "../controllers/authentication_controllers/logout.controller.js";
import refresh from "../controllers/authentication_controllers/refresh.controller.js";
//utils
import verifyJWT from "../middlewares/auth/auth.middleware.js";

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
    registerUser);
    router.route("/login").post(loginValidation, login);
    router.route("/logout").post(verifyJWT,logout);
    // refresh api
    router.route("/refresh").post(refresh)
export default router