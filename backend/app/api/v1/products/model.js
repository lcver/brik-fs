const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const productSchema = Schema({
    sku: {
        type: String,
        required: [true, "sku is required"],
    },
    name: {
        type: String,
        required: [true, "name is required"],
    },
    description: {
        type: String,
        required: [true, "description is required"],
    },
    weight: {
        type: Number,
        required: [true, "weight is required"],
    },
    width: {
        type: Number,
        required: [true, "width is required"],
    },
    length: {
        type: Number,
        required: [true, "length is required"],
    },
    height: {
        type: Number,
        required: [true, "height is required"],
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        required: [true, "price is required"],
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true,
    },
});

module.exports = model("Product", productSchema);
