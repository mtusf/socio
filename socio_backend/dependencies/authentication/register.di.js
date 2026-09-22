import existedUser from "../../Repository/user.repository.js";
import uploadeOnCloudinary from "../../src/utils/cloudinary.js";
import createUser from "../../Repository/createUser.repository.js";
import createdUser from "../../Repository/createdUser.repository.js";
import createRegisterInteractor from "../../src/interactor/authentication/register.interactor.js";


const registerInteractor = createRegisterInteractor(
    existedUser,
    uploadeOnCloudinary,
    createUser,
    createdUser
)
export default registerInteractor