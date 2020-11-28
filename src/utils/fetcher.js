import { API } from "../config/url";
import cookies from "js-cookie";

export const fetcher = async (url, { method, Authorization, payload } = {}) => {

    const params = {
        method: method || "GET",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    };

    const token = Authorization || cookies.get("Authorization");

    if (token) {
        params.headers.Authorization = token;
    }

    const res = await fetch(API + url, params);

    return await res.json();
};
