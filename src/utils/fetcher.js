import { API } from "../config/url";
import cookies from "js-cookie";

import { TOKEN_NAME } from "../config/config";

export const fetcher = async (url, { method, authorization, payload } = {}) => {

    const params = {
        method: method || "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    };

    const token = authorization || cookies.get(TOKEN_NAME);

    if (token) {
        params.headers.Authorization = token;
    }

    const res = await fetch(API + url, params);

    return await res.json();
};
