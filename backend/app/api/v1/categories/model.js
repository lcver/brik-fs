const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const categorySchema = Schema(
    {
        name: {
            type: String,
            required: [true, "Category name is required"],
        },
    },
    { timestamps: true }
);

module.exports = model("Category", categorySchema);
