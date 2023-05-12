import { commonsAPI } from '../../index';

export const appendPictureToUser = async (picture) => {
  const { data } = await commonsAPI.put('picture/', picture, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user-logged-token')}`,
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};
