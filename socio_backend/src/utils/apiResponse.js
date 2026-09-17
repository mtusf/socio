class ApiResponse {
    constructor(message, statusCode = "success", data) {
        this.message = message,
            this.statusCode = statusCode,
            this.data = data,
            this.success = statusCode < 400
    }
}
export {ApiResponse}