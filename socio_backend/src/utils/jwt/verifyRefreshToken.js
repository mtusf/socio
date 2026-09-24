import jwt from "jsonwebtoken";
const verifyRefreshToken = (refreshToken) => {
    const result = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    return result;
};
export default verifyRefreshToken;