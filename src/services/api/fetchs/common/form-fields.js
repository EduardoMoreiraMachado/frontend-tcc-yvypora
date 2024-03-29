import { commonsAPI } from '../../index';

export const fetchCostumerFormFields = async () => {
  const { data } = await commonsAPI.get('forms/costumer');

  return data.payload[0];
};

export const fetchFairFormFields = async ({ latitude, longitude }) => {
  const { data } = await commonsAPI.get(
    `forms/fairs?latitude=${latitude}&longitude=${longitude}`
  );

  return data.payload;
};

export const fetchMarketerFormFields = async ({ latitude, longitude }) => {
  const { data } = await commonsAPI.get(
    `forms/marketer?latitude=${latitude}&longitude=${longitude}`
  );

  return data.payload[0];
};
