import { commonsAPI } from "../api/api";

export const fetchCostumerFormFields = async () => {
  const { data } = await commonsAPI.get("forms/costumer");

  return data.payload[0];
};


