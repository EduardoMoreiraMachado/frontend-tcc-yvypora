import { marketerAPI } from "../../../api/api";

export async function createFair(data) {
  const res = await marketerAPI.post("/fair/", data);
  
  if (res.data.error) {
    return res.data.message;
  }

  return res.data;
}

export async function addImageInFair(id, data) {
  const res = await marketerAPI.put("/fair/picture/" + id, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (res.data.error) {
    return res.data.message;
  }
  return res.data;
}
