import { fetcher } from "../src/utils/fetcher";
import { SIGNING_URL } from "../src/config/url";


export const signinApi = async payload => fetcher(SIGNING_URL, {
    method: "POST",
    payload
});
