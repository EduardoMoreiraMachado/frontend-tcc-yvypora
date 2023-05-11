import { commonsAPI } from '../../../api/api';

class CostumerFetch {
  constructor() {
    this.api = commonsAPI;
  }
  async create(costumer) {
    const { data } = await commonsAPI.post('register/costumer', costumer);

    return data;
  }

  async update(costumer) {
    const { data: res } = await commonsAPI.put(
      `register/costumer/${costumer.id}`,
      costumer
    );

    return res.data;
  }
  async addAddress(address, id) {
    const { data } = await commonsAPI.put(`register/costumer/address/${id}`, {
      address,
    });
    return data;
  }

  async listAddress() {
    const { data } = await commonsAPI.get('user/address', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user-logged-token')}`,
      },
    });
    return data;
  }
}

const instance = new CostumerFetch();

export default instance;
