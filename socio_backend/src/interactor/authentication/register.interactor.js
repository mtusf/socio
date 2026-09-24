

function createRegisterInteractor(
    existedUser,
    uploadeOnCloudinary,
    createUser,
    createdUser
) {
    const execute = async (fullName, username, email, password, avatarLocalPath, coverImageLocalPath) => {
        const existingUser = await existedUser(username, email);
        if (existingUser) {
            const error = new Error("username or email already exists");
            error.status = 409;
            throw error
        }

        const avatar = await uploadeOnCloudinary(avatarLocalPath)

        const coverImage = await uploadeOnCloudinary(coverImageLocalPath)

        const user = await createUser(
            fullName,
            username,
            email,
            password,
            avatar,
            coverImage
        )
        const newCreatedUser = await createdUser(user._id);

        return {
            success: true,
            code: 201,
            message: "user successfully created ",
            user: newCreatedUser
        }
    };



    return { execute }
}
export default createRegisterInteractor