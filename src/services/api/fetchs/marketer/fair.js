import { marketerAPI } from '../../index';

class MarketerFairFetch {
  constructor() {
    this.api = marketerAPI;
  }

  async create(data) {
    const res = await marketerAPI.post('/fair/', data);
    return res.data;
  }

  // TODO
  async addImage(id, formdata) {
    const res = await marketerAPI.put('/fair/picture/' + id, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (res.data.error) {
      return res.data.message;
    }
    return res.data;
  }

  async associate(id) {
    const res = await marketerAPI.put(`/fair/add/${id}`);

    return res.data;
  }
  async dissociate(id) {
    const res = await marketerAPI.delete(`/fair/remove/${id}`);
    return res.data;
  }
  async index() {
    const { data } = await marketerAPI.get('/user/fairs');
    return data.payload;
  }
}

const instance = new MarketerFairFetch();

export default instance;
