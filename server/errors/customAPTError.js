class customAPIError extends Error {
    status
    isOperational;
    path;
    value;

    constructor(message, statusCode = 500) {
        super(message);
        this.status = { code: statusCode, message: `${statusCode}`.startsWith("4") ? "fail" : "error" };
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

const createCustomError = (message, statusCode = 500) => {
    return new customAPIError(message, statusCode);
};

module.exports = { customAPIError, createCustomError };