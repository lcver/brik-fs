const Categories = require("../../api/v1/categories/model");
const { BadRequestError, NotFoundError } = require("../../errors");

const getAllCategories = async () => {
    const result = await Categories.find();

    return result;
};

const createCategories = async (req) => {
    const { name } = req.body;

    const check = await Categories.findOne({ name });
    if (check) throw new BadRequestError("Category name has exist");

    const result = await Categories.create({ name });

    return result;
};

const deleteCategories = async (req) => {
    const { id } = req.params;

    const result = await Categories.findOne({ _id: id });
    if (!result) throw new NotFoundError(`Category id: ${id} not found`);

    await result.deleteOne();

    return result;
};

module.exports = {
    getAllCategories,
    createCategories,
    deleteCategories,
};
