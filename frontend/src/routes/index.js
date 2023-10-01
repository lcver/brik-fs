import { Navigate, Route, Routes } from "react-router-dom";

import { ProductRoute } from "./product-route";
import { AuthRoute } from "./auth-route";
import Navbar from "../components/navbar";
import GuardRoute from "../components/guard-route";

const Home = () => {
    return <Navigate to="/products" replace={true} />;
};
const Category = () => {
    return <h1>Category</h1>;
};

const AppRoutes = () => {
    return (
        <Routes>
            {/* auth router */}
            <Route path="/auth/*" element={<AuthRoute />} />

            {/* main app router */}
            <Route
                path="/"
                element={
                    <>
                        <Navbar />
                        <GuardRoute />
                    </>
                }
            >
                <Route path="products/*" element={<ProductRoute />} />
                <Route path="categories/*" element={<Category />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
