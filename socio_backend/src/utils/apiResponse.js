class ApiResponse {
    constructor(message, status = "success", data) {
        this.message = message,
            this.status = status,
            this.data = data,
            this.success = status < 400
    }
}
export {ApiResponse}