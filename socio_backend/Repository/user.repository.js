import { User } from "../src/models/user.model.js";
const existedUser = async (username, email) => {
    const result = await User.findOne({
        $or: [{ username }, { email }]
    })
    return result
}
export default existedUser;

