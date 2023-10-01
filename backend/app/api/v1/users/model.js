const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const bcrypt = require("bcryptjs");

const userSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            minLength: 3,
            maxLength: 50,
        },
        email: {
            type: String,
            unique: true,
            required: [true, "Email is required"],
        },
        password: {
            type: String,
            required: [true],
        },
    },
    { timestampL: true }
);

userSchema.pre("save", async function (next) {
    const User = this;
    if (User.isModified("password")) {
        User.password = await bcrypt.hash(User.password, 12);
    }
    next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
};

module.exports = model("User", userSchema);
