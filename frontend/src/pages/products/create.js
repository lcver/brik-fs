import { useDispatch } from "react-redux";
import Forms from "./form";

import { createProduct } from "../../redux/product/action";
import handleInputChange from "../../utils/handleInputChange";
import { useRef, useState } from "react";

const ProductCreate = () => {
    const dispatch = useDispatch();
    const imageRef = useRef();
    const [value, setValue] = useState({
        category: "",
        name: "",
        sku: "",
        width: "",
        weight: "",
        length: "",
        height: "",
        price: "",
        description: "",
    });

    const handleChange = (el) => {
        handleInputChange(el, setValue, value);
    };

    const handleValidation = () => {
        let valid = true;

        if (value.category == "") {
            alert("category is required");
            valid = false;
        } else if (value.name == "") {
            alert("name is required");
            valid = false;
        } else if (value.sku == "") {
            alert("sku is required");
            valid = false;
        } else if (value.width == "") {
            alert("width is required");
            valid = false;
        } else if (value.weight == "") {
            alert("weight is required");
            valid = false;
        } else if (value.length == "") {
            alert("length is required");
            valid = false;
        } else if (value.height == "") {
            alert("height is required");
            valid = false;
        } else if (value.price == "") {
            alert("price is required");
            valid = false;
        } else if (value.description == "") {
            alert("description is required");
            valid = false;
        }

        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // call validation
        if (!handleValidation()) return;

        const formData = new FormData();
        formData.append("category", value.category);
        formData.append("name", value.name);
        formData.append("sku", value.sku);
        formData.append("width", value.width);
        formData.append("weight", value.weight);
        formData.append("length", value.length);
        formData.append("height", value.height);
        formData.append("price", value.price);
        formData.append("description", value.description);

        // get image
        const image = imageRef.current.files[0];
        formData.append("image", image);

        const { token } = JSON.parse(localStorage.getItem("auth"));
        dispatch(createProduct(token, formData)).then((res) => {
            window.location.href = "/products";
        });
    };
    return (
        <div className="w-full h-screen">
            <div className="w-full flex justify-center items-center">
                <div className="w-10/12 lg:w-3/5 max-w-[650px] mx-auto mt-10">
                    <h1 className="text-3xl font-bold">Create Products</h1>
                    <div className="relative p-10 mt-5 mb-10 shadow-xl shadow-gray-300 rounded-lg">
                        <Forms
                            value={value}
                            imageRef={imageRef}
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCreate;
