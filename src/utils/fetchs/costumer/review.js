import { costumerAPI } from '../../../api/api';

class ReviewFetch {
  constructor() {
    this.api = costumerAPI;
  }
  async purchase(reviews) {
    const { data } = await this.api.post('/review/purchase', reviews);
    return data;
  }
  async deliveryman(review) {
    const { data } = await this.api.post('/review/deliveryman', review);
    return data;
  }
}

const instance = new ReviewFetch();

export default instance;
