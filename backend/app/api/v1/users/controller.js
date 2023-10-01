const { StatusCodes } = require("http-status-codes");
const { createUser } = require("../../../services/mongose/users");
const { signin } = require("../../../services/mongose/auth");

const authSignUp = async (req, res, next) => {
    try {
        const result = await createUser(req);
        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const authSignIn = async (req, res, next) => {
    try {
        const result = await signin(req);

        res.status(StatusCodes.CREATED).json({
            data: { token: result },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = { authSignUp, authSignIn };
