import { useState } from "react";

import handleInputChange from "../../utils/handleInputChange";
import Forms from "./form";
import Notification from "../../components/notification";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/action";

const Signin = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    localStorage.removeItem("auth");

    const handleSubmit = async () => {
        setIsLoading(true);
        dispatch(userLogin(form))
            .then(async (response) => {
                localStorage.setItem("auth", JSON.stringify(response.data));
                setIsLoading(false);
                navigate("/products");
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    };

    const handleChange = (e) => {
        handleInputChange(e, setForm, form);
    };

    return (
        <div className="w-full h-screen bg-slate-400 flex flex-col justify-center items-center space-y-5">
            <h1 className="text-3xl font-bold">Klontong abad 21</h1>
            <div className="max-w-[350px] w-4/5 lg:w-[350px]">
                {error && <Notification status="error" msg={error} />}
                <div className="bg-white rounded-lg p-5 flex flex-col mx-auto">
                    <Forms
                        form={form}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        loading={isLoading}
                    />
                </div>
            </div>
        </div>
    );
};

export default Signin;
