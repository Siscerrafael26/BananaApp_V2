import axios from "../utils/axios";
import { getToken, setToken } from "./TokenService";

export async function login(credential) {
    const { data } = await axios.post("/login", credential);
    await setToken(data.token); //store token on the users device
    // console.log("Response ", data);
}
export async function loadUser() {
    const token = await getToken(); //get token from device
    const { data: user } = await axios.get("/user", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    // console.log("Load user ", user);

    return user;
}

// making a login request and getting the user data in a data object

// Getting the authenticated user data by calling /user api endpoint
