import { commonsAPI } from "../api/api"

export default async function singUpCostumer (data) {
    const res = await commonsAPI.post("register/costumer", data)
    
    if (res.data.error) {
        return res.data.message
    }
    
    return res.data
};