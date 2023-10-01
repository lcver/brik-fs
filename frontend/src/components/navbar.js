import { Link } from "react-router-dom";

export default function Navbar() {
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/auth/login";
    };
    return (
        <div className="w-full h-20 px-5 flex justify-between items-center">
            <span className="text-2xl font-bold">Klontong</span>
            <div className="flex space-x-5">
                <button
                    onClick={handleLogout}
                    className="bg-red-700 text-white px-2 py-1 test-sm rounded-lg"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
