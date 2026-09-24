import logoutInteractor from "../../dependencies/authentication/logout.di.js";
import { ApiResponse } from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import cookiesOptions from "../../utils/cookies/options.cookies.js";
const logout = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const result = await logoutInteractor.execute(userId);
    return res
        .status(200)
        .clearCookie("accessToken", cookiesOptions)
        .json(
            new ApiResponse(
                result.message,
                200
            )
        )
});
export default logout