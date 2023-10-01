import { fetchApi } from "../../utils/fetch-api";

export const FETCHCATEGORIES = "FETCHCATEGORIES";

export const getCategories = (token) => {
    return async (dispatch) => {
        const response = await fetchApi("/categories", {
            headers: {
                Accept: "application/json",
                authorization: `Bearer ${token}`,
            },
        });

        dispatch({
            type: FETCHCATEGORIES,
            payload: response,
        });

        return response;
    };
};
