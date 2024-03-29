import { cepAPI } from "../../index";

export async function consumeCep(cep) {
  try {
    const { data } = await cepAPI.get(`${cep}/json`);
    if (data.erro) throw new Error();
    return data;
  } catch (e) {
    return false;
  }
}
