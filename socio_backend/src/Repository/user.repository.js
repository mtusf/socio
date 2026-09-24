import { User } from "../models/user.model.js";
export const existedUser = async (username, email) => {
    const result = await User.findOne({
        $or: [{ username }, { email }]
    })
    return result
};

export const findUserById = async (userId) => {
    const result = await User.findById(userId);
return result
};
