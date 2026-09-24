import { User } from "../models/user.model.js";
const generateAccessTokenAndRefreshToken = async(userId)=>{
   const user = await User.findById(userId);
   const accessToken = user.generateAccessToken();
   const refreshToken = user.generateRefreshToken();
return {accessToken, refreshToken}
};
export default generateAccessTokenAndRefreshToken;
