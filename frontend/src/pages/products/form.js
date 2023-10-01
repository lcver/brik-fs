import { Link } from "react-router-dom";

import { Label, Textarea } from "flowbite-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { getCategories } from "../../redux/category/action";

export default function Forms({
    edit,
    imageRef,
    value,
    handleSubmit,
    handleChange,
}) {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState();

    // get categories
    useState(() => {
        if (categories) return;

        const { token } = JSON.parse(localStorage.getItem("auth"));
        dispatch(getCategories(token))
            .then(async (response) => {
                setCategories(response.data);
            })
            .catch((err) => console.log(err));
    }, [categories]);

    return (
        <form>
            <div className="mb-6">
                <Label
                    htmlFor="categories"
                    value="Categories"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                />
                <select
                    id="categories"
                    name="category"
                    value={value.category}
                    onChange={(el) => handleChange(el)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="__blank__">== Pilih Categories ==</option>
                    {categories &&
                        categories.map((item, index) => (
                            <option key={index} value={item._id}>
                                {item.name}
                            </option>
                        ))}
                </select>
            </div>
            <div className="mb-6 flex flex-col-reverse items-start lg:flex-row lg:space-x-4 lg:items-center">
                <div className="flex-1">
                    <Label
                        htmlFor="image"
                        value="Upload file"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    />
                    <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        aria-describedby="image_help"
                        ref={imageRef}
                        name="image"
                        type="file"
                    />
                    <div
                        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                        id="user_avatar_help"
                    >
                        Product picture
                    </div>
                </div>
                {value.image && (
                    <div>
                        <img
                            src={`http://127.0.0.1:9000/${value.image}`}
                            className="h-20"
                        />
                    </div>
                )}
            </div>
            <hr className="mb-6" />
            <div className="mb-6">
                <Label
                    htmlFor="product"
                    value="Name products"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                />
                <input
                    required
                    type="text"
                    id="product"
                    name="name"
                    value={value.name}
                    onChange={(el) => handleChange(el)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="mb-6">
                <Label
                    htmlFor="sku"
                    value="SKU"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                />
                <input
                    required
                    type="text"
                    id="sku"
                    name="sku"
                    value={value.sku}
                    onChange={(el) => handleChange(el)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="mb-6">
                <Label
                    htmlFor="width"
                    value="Width"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                />
                <input
                    required
                    type="number"
                    id="width"
                    name="width"
                    value={value.width}
                    onChange={(el) => handleChange(el)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="mb-6">
                <Label
                    htmlFor="weight"
                    value="Weight"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                />
                <input
                    required
                    type="number"
                    id="weight"
                    name="weight"
                    value={value.weight}
                    onChange={(el) => handleChange(el)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="mb-6">
                <Label
                    htmlFor="length"
                    value="Length"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                />
                <input
                    required
                    type="number"
                    id="length"
                    name="length"
                    value={value.length}
                    onChange={(el) => handleChange(el)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="mb-6">
                <Label
                    htmlFor="height"
                    value="Height"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                />
                <input
                    required
                    type="number"
                    id="height"
                    name="height"
                    value={value.height}
                    onChange={(el) => handleChange(el)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="mb-6">
                <Label
                    htmlFor="price"
                    value="Price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                />
                <input
                    required
                    type="number"
                    id="price"
                    name="price"
                    value={value.price}
                    onChange={(el) => handleChange(el)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="mb-6">
                <Label
                    htmlFor="description"
                    value="Description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                />
                <Textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={value.description}
                    onChange={(el) => handleChange(el)}
                />
            </div>
            <div className="flex justify-end space-x-3">
                <button
                    onClick={handleSubmit}
                    className="bg-green-500 px-2 py-1 rounded-md text-lg text-white"
                >
                    {edit ? "Save" : "Add"}
                </button>
                <Link
                    to="/products"
                    className="bg-red-500 px-2 py-1 rounded-md text-lg text-white"
                >
                    Cancel
                </Link>
            </div>
        </form>
    );
}
