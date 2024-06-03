import * as SecureStore from "expo-secure-store";
let token = null;
export async function setToken(newToken) {
    token = newToken;
    // if token is available we set it and encrypt it
    if (token !== null) {
        await SecureStore.setItemAsync("token", token);
    } else {
        // if no token delete the key
        await SecureStore.deleteItemAsync("token");
    }
}

export async function getToken() {
    //if token is not null, return it, meaning it is arleady loaded
    if (token !== null) {
        return token;
    }
    // or fetch it from the device
    token = await SecureStore.getItemAsync("token");
    return token;
}
