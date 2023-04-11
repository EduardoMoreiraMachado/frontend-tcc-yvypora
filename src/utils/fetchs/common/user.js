import { commonsAPI } from "../../../api/api";


export const getDetails = async () => {
  console.log(`Bearer ${localStorage.getItem('user-logged-token')}`);
  
  const res = await commonsAPI.get("user/details", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("user-logged-token")}`,
    },
  });
  return res.data;
};
