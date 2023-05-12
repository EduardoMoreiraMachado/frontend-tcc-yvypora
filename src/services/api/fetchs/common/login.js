import { commonsAPI } from '../../index';

// TODO
export const login = async ({ email, password }) => {
  console.log(email, password);
  const { data } = await commonsAPI.post('/login/', { email, password });
  return data;
};
