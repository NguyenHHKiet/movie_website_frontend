import axios from "axios";
import { hosting } from "../API";

export const customAxios = axios.create({
    baseURL: hosting,
    headers: {
        Accept: "application/json",
    },
});
