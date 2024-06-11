import axiosLib from "axios";

const axios = axiosLib.create({
    baseURL: "http://172.20.10.4:8000/api",
    headers: {
        Accept: "application/json",
    },
});

export default axios;
export const baseURL = "http://172.20.10.4:8000/storage/";
