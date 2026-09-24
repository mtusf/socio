import ApiError from "../../utils/apiError.js";
const loginValidation = (req, res, next) => {
    const { username, email } = req.body;
    if (!(username || email)) {
        throw new ApiError(400, "username or email required")
    }
    next();
};
export default loginValidation;
