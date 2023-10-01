import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deleteProduct, getProduct } from "../../redux/product/action";

const Products = () => {
    const dispatch = useDispatch();
    const [result, setResult] = useState();

    useEffect(() => {
        if (result) return;

        const { token } = JSON.parse(localStorage.getItem("auth"));
        dispatch(getProduct(token))
            .then(async (response) => {
                setResult(response.data);
            })
            .catch((err) => console.log(err));
    }, [result]);

    const handleDelete = (id) => {
        const { token } = JSON.parse(localStorage.getItem("auth"));
        dispatch(deleteProduct(token, id))
            .then((res) => {
                window.location.href = "/products";
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="w-full h-screen">
            <div className="w-full flex justify-center items-center">
                <div className="w-11/12 mx-auto mt-10">
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-bold">Products</h1>
                        <div>
                            <Link
                                to="/products/create"
                                className="bg-green-500 text-white px-4 py-2 rounded-xl"
                            >
                                Add products
                            </Link>
                        </div>
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-white uppercase bg-gray-400">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center"
                                    >
                                        No
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center"
                                    >
                                        Category
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center"
                                    >
                                        sku
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center"
                                    >
                                        weight
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center"
                                    >
                                        width
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center"
                                    >
                                        length
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center"
                                    >
                                        height
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center"
                                    >
                                        harga
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center"
                                    >
                                        image
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {result &&
                                    result.map((item, index) => {
                                        return (
                                            <tr
                                                key={index}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                            >
                                                <td className="px-6 py-4 text-center">
                                                    0
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item.category.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item.sku}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    {item.weight}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    {item.width}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    {item.length}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    {item.height}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    {item.price}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <img
                                                        src={`http://127.0.0.1:9000/${item.image}`}
                                                        className="max-h-16 mx-auto"
                                                    />
                                                </td>
                                                <td className="px-6 py-4 flex space-x-2 justify-center">
                                                    <Link
                                                        to={`/products/edit/${item._id}`}
                                                        className="bg-blue-500 text-base text-white px-2 py-1 rounded-lg"
                                                    >
                                                        edit
                                                    </Link>
                                                    <button
                                                        onClick={() => {
                                                            handleDelete(
                                                                item._id
                                                            );
                                                        }}
                                                        className="bg-red-500 text-base text-white px-2 py-1 rounded-lg"
                                                    >
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
