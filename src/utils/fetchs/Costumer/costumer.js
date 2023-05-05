import { commonsAPI } from "../../../api/api";

export const singUpCostumer = async (costumer) => {
  const { data } = await commonsAPI.post("register/costumer", costumer);

  return data;
};

export const updateCostumerAccount = async (newCostumer) => {
  const { data: res } = await commonsAPI.put(
    `register/costumer/${newCostumer.id}`,
    newCostumer
  );

  return res.data;
};

export const addAddressToCostumer = async (address, id) => {
  const { data } = await commonsAPI.put(`register/costumer/address/${id}`, {
    address,
  });
  return data;
};

export const listAddresses = async () => {
  const { data } = await commonsAPI.get("user/address", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user-logged-token")}`,
    },
  });
  return data;
};


