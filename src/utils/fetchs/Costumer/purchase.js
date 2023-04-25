import { costumerAPI } from "../../../api/api";

export const createPurchase = async (purchase) => {
  const { data } = await costumerAPI.post("/purchases/", purchase);
  return data.data;
};


