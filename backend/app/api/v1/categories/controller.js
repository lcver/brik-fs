const { StatusCodes } = require("http-status-codes");
const {
    createCategories,
    getAllCategories,
    deleteCategories,
} = require("../../../services/mongose/categories");

const create = async (req, res, next) => {
    try {
        const result = await createCategories(req);
        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const index = async (req, res, next) => {
    try {
        const result = await getAllCategories();
        res.status(StatusCodes.CREATED).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const destroy = async (req, res, next) => {
    try {
        const result = await deleteCategories(req);

        res.status(StatusCodes.OK).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    index,
    create,
    destroy,
};
