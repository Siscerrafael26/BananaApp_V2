import axios from "../utils/axios";
import { getToken, setToken } from "./TokenService";

export async function login(credential) {
    const { data } = await axios.post("/login", credential);
    await setToken(data.token); //store token on the users device
}
export async function loadUser() {
    const token = await getToken(); //get token from device
    const { data: user } = await axios.get("/user", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return user;
}

// Getting the authenticated user data by calling /user api endpoint
export async function signup(credential) {
    // console.log(credential);
    const { data } = await axios.post("/signup", credential);
    await setToken(data.token);
}

export async function logout() {
    const token = await getToken();

    await axios.post(
        "/logout",
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    await setToken(null);
}
