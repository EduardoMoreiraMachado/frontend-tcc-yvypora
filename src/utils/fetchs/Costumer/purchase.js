import { costumerAPI } from '../../../api/api';

export const createPurchase = async (purchase) => {
  const { data } = await costumerAPI.post('/purchases/', purchase);
  return data.data;
};

export const getPurchase = async (id) => {
  const { data } = await costumerAPI.get(`/purchases/${id}`);
  return data;
};
