class ApiError extends Error {
    constructor(
        statustCode,
        message="Something went wrong",
        errors = [],
        stack=""

    ){
        super(message)
        this.statustCode=statustCode
        this.data = null
        this.message = message
        this.success= false
        this.errors=errors
        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export default ApiError