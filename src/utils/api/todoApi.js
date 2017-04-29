import axios from 'axios';
import uuid from 'uuid/v4';

axios.defaults.baseURL = 'http://localhost:8080';

class TodoApi {
  constructor() {
    this.path = '/todos';
  }

  async getAllTodo() {
    try {
      const { data } = await axios.get(this.path);

      return data;
    } catch (e) {
      return e;
    }
  }

  async createTodo(args) {
    try {
      const { data } = await axios.post(this.path, {
        text: args.text,
        id: uuid(),
        completed: false,
      });

      return data;
    } catch (e) {
      return e;
    }
  }
}

export default new TodoApi();
