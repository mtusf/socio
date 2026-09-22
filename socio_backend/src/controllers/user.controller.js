import asyncHandler from "../utils/asyncHandler.js";
import registerInteractor from "../../dependencies/authentication/register.di.js";
const registerUser = asyncHandler(async (req, res) => {
    const { fullName, username, email, password } = req.body;

    const avatarLocalPath = req.files?.avatar[0]?.path;
    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path
    }

    const result = await registerInteractor.execute(fullName, username, email, password, avatarLocalPath, coverImageLocalPath);
    return res.status(result.code).json({
        message: result.message,
        user: result.user
    })

});

export { registerUser }
