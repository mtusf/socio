import asyncHandler from "../../utils/asyncHandler.js";
import loginInteractor from "../../dependencies/authentication/login.di.js";
import cookiesOptions from "../../utils/cookies/options.cookies.js";
import { ApiResponse } from "../../utils/apiResponse.js";
const login = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body;

    const result = await loginInteractor.execute(username, email, password);
    if (result.success === false) {
        return res.status(401).json({
            message: result.message
        });

    }
    return res
        .status(200)
        .cookie("accessToken", result.loggedInUser.accessToken, cookiesOptions)
        .cookie("refreshToken", result.loggedInUser.refreshToken, cookiesOptions)
        .json(
            new ApiResponse(
                result.message,
                200,
           {
            user:result.loggedInUser
           }

            )
        )



})
export default login