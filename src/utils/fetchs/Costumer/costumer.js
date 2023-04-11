import { commonsAPI } from "../../../api/api";

export const singUpCostumer = async (costumer) => {
  const { data } = await commonsAPI.post("register/costumer", costumer);

  return data;
};
