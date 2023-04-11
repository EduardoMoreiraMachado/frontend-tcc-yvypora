import { commonsAPI } from "../../../api/api"

export const singUpMarketer = async (marketer) => {
    const { data } = await commonsAPI.post("register/marketer", marketer)

    return data
}