import checkUserByUsernameOrEmail from "../../Repository/checkUser.repository.js";
import createLoginInteractor from "../../interactor/authentication/login.interacor.js";
const loginInteractor = createLoginInteractor(
checkUserByUsernameOrEmail
)
export default loginInteractor;