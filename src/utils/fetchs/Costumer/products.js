import { costumerAPI } from "../../../api/api";

export const listProducts = async () => {
  const firstRes = await costumerAPI.get(
    `product/?category=0&score=0&lowerPrice=0&higherPrice=100000`
  );
  const secondRes = await costumerAPI.get(
    `product/?category=1&score=0&lowerPrice=0&higherPrice=100000`
  );
  const thirdRes = await costumerAPI.get(
    `product/?category=2&score=0&lowerPrice=0&higherPrice=100000`
  );
  const fourthRes = await costumerAPI.get(
    `product/?category=3&score=0&lowerPrice=0&higherPrice=100000`
  );

  const arrs = [
    firstRes.data.data,
    secondRes.data.data,
    thirdRes.data.data,
    fourthRes.data.data,
  ];

  const res = arrs.flat();

  return res;
};

export const listProductsInSaleOff = async () => {
  const res = await costumerAPI.get("product/inSaleOff");

  return res.data.data;
};

export const listProductNearToClient = async () => {};
