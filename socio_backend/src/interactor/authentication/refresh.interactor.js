function createRefreshInteractor(
    verifyRefreshToken,
    findUserById,
    generateAccessTokenAndRefreshToken
) {
    const execute = async (incomingRefreshToken) => {
        const decoded = verifyRefreshToken(incomingRefreshToken);
        const user = await findUserById(decoded?._id);
        if (!user) {
            return {
                success: false,
                message: "Invalid refresh token"
            }
        }
        if (incomingRefreshToken !== user?.refreshToken) {
            return {
                success: false,
                message: "Refresh Token is expired or used"
            }
        }
        const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id);
        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false });
        return {
            success: true,
            message: "Refresh Successfully",
            accessToken,
            refreshToken
        }


    };
    return { execute }
}
export default createRefreshInteractor;