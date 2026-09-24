
function createLogoutInteractor(
    unsetUserFieldsById
) {
    const execute = async (userId) => {
        await unsetUserFieldsById(userId, { refreshToken: "" });

        return {
            success: true,
            message: "Logout successfully"
        }
    }
    return { execute }

}
export default createLogoutInteractor;