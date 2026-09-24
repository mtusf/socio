import unsetUserFieldsById from "../../Repository/unsetUserFiledsById.repository.js";
import createLogoutInteractor from "../../interactor/authentication/logout.interactor.js";
const logoutInteractor = createLogoutInteractor(
    unsetUserFieldsById
);
export default logoutInteractor;