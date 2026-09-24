import { User } from "../models/user.model.js";
const createdUser = async(_id)=>{
const result = await User.findById(_id).select(
    "-password -refreshToken"
)
return result

}
export default createdUser