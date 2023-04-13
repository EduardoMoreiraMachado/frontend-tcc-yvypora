import { commonsAPI } from "../../../api/api";

export const singUpMarketer = async (marketer) => {
  const { data } = await commonsAPI.post("register/marketer", marketer);

  return data;
};

export const updateMarketerAccount = async (newMarketer) => {
  const { data } = await commonsAPI.put(
    `register/marketer/${newMarketer.id}`,
    newMarketer
  );

  return data;
};
