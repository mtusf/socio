import { User } from "../models/user.model.js";
const createUser = async (fullName, username, email, password, avatar, coverImage) => {
    const result = await User.create({
        fullName,
        username,
        email,
        password,
        avatar:avatar,
        coverImage:coverImage
    })
    return result

}
export default createUser