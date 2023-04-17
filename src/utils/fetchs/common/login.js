import { commonsAPI } from "../../../api/api";

// TODO
export const login = async ({ email, password }) => {
  console.log(email, password);
  const { data } = await commonsAPI.post("/login/", { email, password });
  return data;
};
