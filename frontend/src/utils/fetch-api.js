const BASE_URL_API = "http://127.0.0.1:9000/api/v1";

export const fetchApi = async (url, options) => {
    const requestUrl = `${BASE_URL_API}${url}`;
    const response = await fetch(requestUrl, { ...options });

    const data = await response.json();

    if (!response.ok) {
        console.log(response.statusText);
        throw data.msg;
    }

    return data;
};
