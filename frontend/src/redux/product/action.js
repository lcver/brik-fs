import { fetchApi } from "../../utils/fetch-api";

export const FETCHPRODUCT = "FETCHPRODUCT";
export const DELETEPRODUCT = "DELETEPRODUCT";
export const CREATEPRODUCT = "CREATEPRODUCT";
export const UPDATEPRODUCT = "UPDATEPRODUCT";

export const getProduct = (token) => {
    return async (dispatch) => {
        const response = await fetchApi("/products", {
            headers: {
                Accept: "application/json",
                authorization: `Bearer ${token}`,
            },
        });

        dispatch({
            type: FETCHPRODUCT,
            payload: response,
        });

        return response;
    };
};

export const getOneProduct = (token, id) => {
    return async (dispatch) => {
        const response = await fetchApi(`/products/${id}`, {
            headers: {
                Accept: "application/json",
                authorization: `Bearer ${token}`,
            },
        });

        dispatch({
            type: FETCHPRODUCT,
            payload: response,
        });

        return response;
    };
};

export const deleteProduct = (token, id) => {
    return async (dispatch) => {
        const response = await fetchApi(`/products/${id}`, {
            method: "delete",
            headers: {
                Accept: "application/json",
                authorization: `Bearer ${token}`,
            },
        });

        dispatch({
            type: DELETEPRODUCT,
            payload: response,
        });

        return response;
    };
};

export const createProduct = (token, form) => {
    return async (dispatch) => {
        const response = await fetchApi(`/products`, {
            method: "post",
            headers: {
                Accept: "application/json",
                authorization: `Bearer ${token}`,
            },
            body: form,
        });

        dispatch({
            type: CREATEPRODUCT,
            payload: response,
        });

        return response;
    };
};
export const updateProduct = (token, id, form) => {
    return async (dispatch) => {
        const response = await fetchApi(`/products/${id}`, {
            method: "put",
            headers: {
                Accept: "application/json",
                authorization: `Bearer ${token}`,
            },
            body: form,
        });

        dispatch({
            type: UPDATEPRODUCT,
            payload: response,
        });

        return response;
    };
};
