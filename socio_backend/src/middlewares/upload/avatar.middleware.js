import ApiError from "../../utils/apiError.js";
const checkAvatar = async(req,res,next)=>{
    const avatarLocalPath = req.files?.avatar[0]?.path
    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar is required")
    }
    next();
}
export default checkAvatar