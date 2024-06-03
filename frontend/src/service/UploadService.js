import axios from "../utils/axios";

export async function upload(uploadData) {
    const { data } = await axios.post("/add", uploadData);
}
export async function loadData(user) {
    const { data: product } = await axios.get(`/data${user}`);
    return product;
}

export async function loadAllData() {
    const { data: products } = await axios.get("/all");
    return products;
}
