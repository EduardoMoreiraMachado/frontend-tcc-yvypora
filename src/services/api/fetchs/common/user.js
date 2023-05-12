import { commonsAPI } from '../../index';

export const getDetails = async () => {
  const res = await commonsAPI.get('user/details', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user-logged-token')}`,
    },
  });
  return res.data;
};
