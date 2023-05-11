import { costumerAPI } from '../../../api/api';

class PurchaseFetch {
  constructor() {
    this.api = costumerAPI;
  }

  async createPurchase(purchase) {
    const { data } = await costumerAPI.post('/purchases/', purchase);
    return data.data;
  }

  async getPurchase(id) {
    const { data } = await costumerAPI.get(`/purchases/${id}`);
    return data;
  }

  async historic() {
    const { data } = await costumerAPI.get('/purchases/historic');
    return data.data;
  }
}

const instance = new PurchaseFetch();

export default instance;
