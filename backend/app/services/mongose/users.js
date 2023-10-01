const User = require("../../api/v1/users/model");
const { BadRequestError } = require("../../errors");

const createUser = async (req) => {
    const { name, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        throw new BadRequestError("confirmation password not match");
    }

    const result = await User.create({
        name,
        email,
        password,
    });

    delete result._doc.password;

    return result;
};

module.exports = { createUser };
