import { marketerAPI } from "../../../api/api";

export const indexProducts = async () => {
  const res = await marketerAPI.get("product/");

  if (res.data.error) {
    return res.data.message;
  }

  return res.data;
};

export const createProduct = async (data) => {
  const res = await marketerAPI.post("product/", data);


  return res.data;
};

export const addSaleOff = async ({ id, value }) => {
  const res = await marketerAPI.put(`product/sale_off/${id}?value=${value}`);

  return res.data;
};

export const addPictureToProduct = async ({ id, formData }) => {
  const res = await marketerAPI.put(`product/picture/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

// deletar produto
export const disableProduct = async ({ id }) => {
   const res = await marketerAPI.delete(`disable/${id}`)

  return res.data;
};
