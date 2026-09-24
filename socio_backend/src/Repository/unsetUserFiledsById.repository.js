import { User } from "../models/user.model.js";
const unsetUserFieldsById = async(userId,data)=>{
const result = await User.findByIdAndUpdate(
    userId,
    {
        $unset: data
    },
    {
        new:true
    }
);
return result;
};
export default unsetUserFieldsById;
