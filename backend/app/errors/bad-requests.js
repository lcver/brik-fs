// import http-status-codes
const { StatusCodes } = require("http-status-codes");

class BadRequest extends Error {
    constructor(message) {
        super(message);
        // memberikan statusCode bad request
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}
module.exports = BadRequest;
