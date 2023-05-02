import { commonsAPI } from "../../../api/api";

export const listByCloseFairs = async ({ latitude, longitude }) => {
    const { data } = await commonsAPI.get(`fair/listByClose?latitude=${latitude}&longitude=${longitude}`)
    return data.payload
};
