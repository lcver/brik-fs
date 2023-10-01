import { useState } from "react";
import Forms from "./forms";
import handleInputChange from "../../utils/handleInputChange";
import { userRegister } from "../../redux/auth/action";
import Notification from "../../components/notification";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        handleInputChange(e, setForm, form);
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        dispatch(userRegister(form))
            .then(async (response) => {
                setIsLoading(false);
                navigate("/auth/login");
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });
    };

    return (
        <div className="w-full h-screen bg-slate-400 flex flex-col justify-center items-center space-y-5">
            <h1 className="text-3xl font-bold">Klontong abad 21</h1>
            {error && <Notification status="error" msg={error} />}
            <div className="bg-white max-w-[350px] w-4/5 lg:w-[350px] rounded-lg p-5 flex flex-col mx-auto">
                <Forms
                    form={form}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    loading={isLoading}
                />
            </div>
        </div>
    );
};

export default Signup;
