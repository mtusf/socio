import refreshInteractor from "../../dependencies/authentication/refresh.di.js";
import ApiError from "../../utils/apiError.js";
import { ApiResponse } from "../../utils/apiResponse.js";
import cookiesOptions from "../../utils/cookies/options.cookies.js";
const refresh = async (req, res) => {
    const incomingRefreshToken = req.cookies?.refreshToken || req.header("Authorization").replace("Bearer ", "");
    const result = await refreshInteractor.execute(incomingRefreshToken)
    if (result.success === false) {
        return res.status(401).json(
            new ApiError(
                401,
                result.message
            )
        )
    }
    res.cookie("accessToken", result.accessToken, cookiesOptions);
    res.cookie("refreshToken", result.refreshToken, cookiesOptions);
    if (result.success === true) {
        return res.status(200).json(
            new ApiResponse(
                result.message,
                200,
                {
                    accessToken: result.accessToken,
                }


            ),

        )
    }

}
export default refresh