import { fetchApi } from "../../utils/fetch-api";

export const USERLOGIN = "USERLOGIN";
export const USERREGISTER = "USERREGISTER";
export const USERLOGOUT = "USERLOGOUT";

export const userLogin = (form) => {
    const { email, password } = form;
    return async (dispatch) => {
        const response = await fetchApi("/auth/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                email: email.toLowerCase(),
                password: password,
            }),
        });

        dispatch({
            type: USERLOGIN,
            payload: response,
        });

        return response;
    };
};

export const userRegister = (form) => {
    const { name, email, password, confirmPassword } = form;
    return async (dispatch) => {
        const response = await fetchApi("/auth/register", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email.toLowerCase(),
                password: password,
                confirmPassword: confirmPassword,
            }),
        });

        dispatch({
            type: USERREGISTER,
            payload: response,
        });

        return response;
    };
};

export function useLogout() {
    localStorage.removeItem("auth");
    return {
        type: USERLOGOUT,
    };
}
