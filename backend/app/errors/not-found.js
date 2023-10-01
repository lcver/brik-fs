const { StatusCodes } = require("http-status-codes");

class NotFound extends Error {
    constructor(message) {
        super(message);
        // memberikan statusCode not found
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}
module.exports = NotFound;
