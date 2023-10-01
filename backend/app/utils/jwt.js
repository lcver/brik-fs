const jwt = require("jsonwebtoken");

const createJWT = ({ payload }) => {
    const token = jwt.sign(payload, "luckyadhitya", {
        expiresIn: "24h",
    });

    return token;
};

const isTokenValid = ({ token }) => jwt.verify(token, "luckyadhitya");

module.exports = {
    createJWT,
    isTokenValid,
};
