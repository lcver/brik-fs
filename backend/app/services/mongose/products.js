const Products = require("../../api/v1/products/model");
const Categories = require("../../api/v1/categories/model");
const { NotFoundError } = require("../../errors");

const generateUrlImage = async (req) => {
    const result = req.file
        ? `products/${req.file.filename}`
        : "products/default.png";
    return result;
};

const getAllProducts = async (req) => {
    const { keyword, category, sku } = req.query;
    let condition = {};

    if (keyword) {
        condition = { ...condition, name: { $regex: keyword, $options: "i" } };
    }

    if (category) {
        condition = { ...condition, category: category };
    }

    if (sku) {
        condition = { ...condition, sku: sku };
    }

    const result = await Products.find(condition).populate({
        path: "category",
        select: "_id name",
    });
    return result;
};

const createProducts = async (req) => {
    const {
        sku,
        name,
        description,
        weight,
        width,
        length,
        height,
        price,
        category,
    } = req.body;

    const resultCategory = await Categories.findOne({ _id: category });
    if (!resultCategory)
        throw new NotFoundError(`Category with id ${category} not found`);

    const imageName = await generateUrlImage(req);
    const result = await Products.create({
        sku,
        name,
        description,
        weight,
        width,
        length,
        height,
        image: imageName,
        price,
        category: resultCategory._id,
    });

    return result;
};

const getOneProducts = async (req) => {
    const { id } = req.params;

    const result = await Products.findOne({ _id: id });
    if (!result) throw new NotFoundError(`Product with id: ${id} not found`);

    return result;
};

const updateProducts = async (req) => {
    const { id } = req.params;
    const {
        sku,
        name,
        description,
        weight,
        width,
        length,
        height,
        price,
        category,
        image,
    } = req.body;

    console.log(req.body);
    const resultCategory = await Categories.findOne({ _id: category });
    if (!resultCategory)
        throw new NotFoundError(`Category with id: ${category} not found`);

    let imageName;
    if (req.file) {
        imageName = await generateUrlImage(req);
    } else {
        imageName = image;
    }
    const result = await Products.findOneAndUpdate(
        { _id: id },
        {
            sku,
            name,
            description,
            weight,
            width,
            length,
            height,
            image: imageName,
            price,
            category: resultCategory._id,
        },
        { new: true, runValidators: true }
    );

    if (!result) throw new NotFoundError(`Product with id: ${id} not found`);

    return result;
};

const deleteProducts = async (req) => {
    const { id } = req.params;

    const result = await Products.findOne({ _id: id });
    if (!result) throw NotFoundError(`Product with id: ${id} not found`);

    await result.deleteOne();

    return result;
};

module.exports = {
    getAllProducts,
    createProducts,
    getOneProducts,
    updateProducts,
    deleteProducts,
};
