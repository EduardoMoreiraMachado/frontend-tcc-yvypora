import { costumerAPI } from "../../../api/api";

export const search = async (context) => {
  const { data } = await costumerAPI.get(`search/?q=${context}`);
  return data;
};
