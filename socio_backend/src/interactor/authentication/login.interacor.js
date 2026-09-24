function createLoginInteractor(
    checkUserByUsernameOrEmail
) {
    const execute = async (username, email, password) => {
        const user = await checkUserByUsernameOrEmail(username, email);
        console.log(username)
        console.log(password)
        console.log("user", user)
        if (!user) {
            return {
                success: false,
                message: "username/email or password is not correct"
            }
        }
        const isPasswordValid = await user.isPasswordCorrect(password);

        if (isPasswordValid === false) {
            return {
                success: false,
                message: "username/email or password is not correct"
            }
        }
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });
        const { fullName } = user;
        const loggedInUser = {
            fullName,
            username,
            email,
            accessToken,
            refreshToken
        }

        return {
            success: true,
            message: "Login successfully",
            loggedInUser
        }
    };
    return { execute }
}
export default createLoginInteractor;