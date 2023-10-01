import { Route, Routes } from "react-router-dom";
import Signup from "../pages/signup";
import Signin from "../pages/signin";
import GuestOnlyRoute from "../components/guest-only-route";

export function AuthRoute() {
    return (
        <Routes>
            <Route
                path="/register"
                element={
                    <GuestOnlyRoute>
                        <Signup />
                    </GuestOnlyRoute>
                }
            />
            <Route
                path="/login"
                element={
                    <GuestOnlyRoute>
                        <Signin />
                    </GuestOnlyRoute>
                }
            />
        </Routes>
    );
}
