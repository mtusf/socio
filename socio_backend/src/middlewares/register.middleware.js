import ApiError from "../utils/apiError.js";
const registerMiddleware = (req, res, next) => {
    const { fullName, email, username, password } = req.body
    if (
        [fullName, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fileds are required")
    }
    next();
}
export default registerMiddleware