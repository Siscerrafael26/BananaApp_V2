import axios from "../utils/axios";

export async function loadData(user) {
    const { data: product } = await axios.get(`/data${user}`);
    return product;
}

export async function loadAllData() {
    const { data: products } = await axios.get("/all");
    return products;
}


export async function upload(uploadData) {
    const data = new FormData();
    
    // Append form data
    data.append('kiasi', uploadData.kiasi);
    data.append('bei', uploadData.bei);
    data.append('aina', uploadData.aina);
    data.append('user_id', uploadData.user_id);

    // Append image file
    if (uploadData.image) {
        data.append('image', {
            uri: uploadData.image.uri,
            type: uploadData.image.mimeType,
            name: uploadData.image.name,
        });
    }

    const response = await axios.post("/add/product", data, {
        headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
}