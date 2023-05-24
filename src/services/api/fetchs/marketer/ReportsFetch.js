import { marketerAPI } from '../..';

class ReportsFetch {
  constructor() {
    this.api = marketerAPI;
  }
  async getSaleHistoric() {
    const { data } = await this.api.get('/reports/');
    return data.data;
  }
  async getDailyEaring() {
    const { data } = await this.api.get('/reports/daily');

    return data.data;
  }
  async getWeekEaring() {
    const { data } = await this.api.get('/reports/week');

    return data.data;
  }
  async getMonthEaring() {
    const { data } = await this.api.get('/reports/month');

    return data.data;
  }
}

const instance = new ReportsFetch();

export default instance;
