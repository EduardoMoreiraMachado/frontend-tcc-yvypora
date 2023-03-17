import { commonsAPI } from "../api/api";

export const fetchCostumerFormFields = async () => {
  const { data } = await commonsAPI.get("forms/costumer");

  return data.payload[0];
};

export const fetchFairFormFields = async ({ lat, long }) => {
  const { data } = await commonsAPI.get(`forms/fairs?lat=${lat}&long=${long}`);

  return data.payload;
};
