import { costumerAPI } from '../../index';

export const listProducts = async () => {
  const firstRes = await costumerAPI.get(
    `product/?category=0&score=0&lowerPrice=0&higherPrice=10000`
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

export const listByCategory = async (id) => {
  const { data } = await costumerAPI.get(
    `product/?category=${id}&score=0&lowerPrice=0&higherPrice=100000`
  );
  return data;
};

export const listWithFilters = async (category, score, lowerPrice) => {
  const { data } = await costumerAPI.get(
    `product/?category=${category}&score=${score}&lowerPrice=${lowerPrice}&higherPrice=100000`
  );

  return data;
};

export const listAllProductsWithFilters = async (score, lowerPrice) => {
  const { data: category1 } = await costumerAPI.get(
    `product/?category=0&score=${score}&lowerPrice=${lowerPrice}&higherPrice=100000`
  );
  const { data: category2 } = await costumerAPI.get(
    `product/?category=1&score=${score}&lowerPrice=${lowerPrice}&higherPrice=100000`
  );
  const { data: category3 } = await costumerAPI.get(
    `product/?category=2&score=${score}&lowerPrice=${lowerPrice}&higherPrice=100000`
  );
  const { data: category4 } = await costumerAPI.get(
    `product/?category=3&score=${score}&lowerPrice=${lowerPrice}&higherPrice=100000`
  );
  const { data: category5 } = await costumerAPI.get(
    `product/?category=5&score=${score}&lowerPrice=${lowerPrice}&higherPrice=100000`
  );

  const arrs = [
    category1.data,
    category2.data,
    category3.data,
    category4.data,
    category5.data,
  ];

  const data = arrs.flat();

  return data;
};

export const listProductsInSaleOff = async () => {
  const { data } = await costumerAPI.get('product/inSaleOff');

  return data.data;
};

export const listProductNearToClient = async () => {
  const { data } = await costumerAPI.get('product/findNearest');

  return data.data;
};

export const getProduct = async (id) => {
  const { data } = await costumerAPI.get(`product/${id}`);

  return data;
};
