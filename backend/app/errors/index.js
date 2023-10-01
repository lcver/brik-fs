const BadRequestError = require("./bad-requests");
const NotFoundError = require("./not-found");
const UnauthenticatedError = require("./unauthenticated");
const UnauthorizedError = require("./unauthorized");

module.exports = {
    BadRequestError,
    NotFoundError,
    UnauthenticatedError,
    UnauthorizedError,
};
