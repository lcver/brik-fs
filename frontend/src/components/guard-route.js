import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function GuardRoute({ children }) {
    let { token } = useSelector((state) => state.auth);

    if (!token && !localStorage.getItem("auth"))
        return <Navigate to="/auth/login" replace={true} />;

    return children || <Outlet />;
}
