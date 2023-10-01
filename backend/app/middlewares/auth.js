const { UnauthenticatedError } = require("../errors");
const { isTokenValid } = require("../utils");

const authenticateUser = async (req, res, next) => {
    try {
        let token;
        const authHeader = req.headers.authorization;

        if (authHeader && authHeader.startsWith("Bearer")) {
            token = authHeader.split(" ")[1];
        }

        if (!token) {
            throw new UnauthenticatedError("Authentication invalid");
        }

        const payload = isTokenValid({ token });

        req.user = {
            id: payload.userId,
            email: payload.email,
            name: payload.name,
        };

        next();
    } catch (err) {
        next(err);
    }
};

module.exports = { authenticateUser };
