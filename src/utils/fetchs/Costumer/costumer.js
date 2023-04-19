import { commonsAPI } from "../../../api/api";

export const singUpCostumer = async (costumer) => {
  const { data } = await commonsAPI.post("register/costumer", costumer);

  return data;
};

export const updateCostumerAccount = async (newCostumer) => {
  const { data } = await commonsAPI.put(`register/costumer/${newCostumer.id}`, newCostumer);
  return data;
};
