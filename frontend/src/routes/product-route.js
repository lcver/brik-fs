import { Route, Routes } from "react-router-dom";
import Products from "../pages/products";
import ProductCreate from "../pages/products/create";
import ProductEdit from "../pages/products/edit";

export function ProductRoute() {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/create" element={<ProductCreate />} />
            <Route path="/edit/:productId" element={<ProductEdit />} />
        </Routes>
    );
}
