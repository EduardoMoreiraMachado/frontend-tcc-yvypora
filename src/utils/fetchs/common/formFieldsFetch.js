import { commonsAPI } from "../../../api/api";

export const fetchCostumerFormFields = async () => {
  const { data } = await commonsAPI.get("forms/costumer");

  return data.payload[0];
};

export const fetchFairFormFields = async ({ latitude, longitude }) => {
  const { data } = await commonsAPI.get(`forms/fairs?lat=${latitude}&long=${longitude}`);

  return data.payload;
};


export const fetchMarketerFormFields = async ({latitude, longitude}) => {
  const { data } = await commonsAPI.get(`forms/marketer?lat=${latitude}&long=${longitude}`);

  return data.payload[0];
};