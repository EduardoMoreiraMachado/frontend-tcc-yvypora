import { marketerAPI } from "../api/api";

export const createProduct = async (data) => {
    console.log(data);
    const res = await marketerAPI.post("product/", data)
    
    if (res.data.error) {
        return res.data.message
    }
    
    return res.data
}