import { commonsAPI } from '../../index';

export const listCategories = async () => {
  const res = await commonsAPI.get('forms/categories');
  return res.data.data;
};
