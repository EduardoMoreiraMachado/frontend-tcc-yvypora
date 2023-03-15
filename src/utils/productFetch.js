import { marketerAPI } from "../api/api";

export const createProduct = async (data) => {
  const res = await marketerAPI.post("product/", data);

  if (res.data.error) {
    return res.data.message;
  }

  return res.data;
};

export const addSaleOff = async ({ id, value }) => {
  const res = await marketerAPI.put(`product/sale_off/${id}?value=${value}`);

  if (res.data.error) {
    return res.data.message;
  }

  return res.data;
};

export const addPictureToProduct = async ({id, formData}) => {
  const res = await marketerAPI.put(`product/picture/${id}`, formData);

  if (res.data.error) {
    return res.data.message;
  }

  return res.data;
};
