import { commonsAPI } from "../../../api/api";

export const listCategories = async () => {
  const res = await commonsAPI.get("/categories");
  return res.data.data;
};
