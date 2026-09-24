import { User } from "../models/user.model.js";
const checkUserByUsernameOrEmail = async (username, email) => {
    console.log("username in repositoy", username);
    console.log("email in repository", email)
    const result = await User.findOne({
        $or: [{ username }, { email }]
    })
    return result
}
export default checkUserByUsernameOrEmail;
