import axios from "../utils/axios";

export async function getBuyerOrder(user) {
    const { data: orders } = await axios.get(`/order${user}`);
    return orders;
}
export async function makeOrder(data) {
    const { data: order } = await axios.post("/makeorder", data);
    return order;
}

export async function getFarmerOrder(user) {
    const { data: orders } = await axios.get(`/farmer${user}`);
    return orders;
}

export async function updateOrder(data, product_id) {
    const response = await axios.put(`/update${product_id}`, data);
    return response;
}
