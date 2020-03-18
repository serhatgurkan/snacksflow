import axios from "axios";
import { API_URL } from "react-native-dotenv";
console.log(API_URL);
const defaultHeaders = {
  "Content-Type": "application/json",
  "If-Modified-Since": "Mon, 26 Jul 1997 05:00:00 GMT",
  "Cache-Control": "no-cache",
  Pragma: "no-cache"
};
class ApiStoreProvider {
  constructor() {
    this.apiStore = new ApiStore();
  }
  get store() {
    return this.apiStore;
  }
}

class ApiStore {
  constructor() {
    const myInterceptorSuccess = response => response;

    const myInterceptorError = error => {
      throw error;
    };

    this.todos = this.createAxios("/todos.json");
    this.todos.interceptors.response.use(
      myInterceptorSuccess,
      myInterceptorError
    );
  }

  createAxios(url) {
    return axios.create({
      baseURL: `${API_URL}${url}`,
      headers: {
        ...defaultHeaders
        /* Authorization: `Bearer ${this.token}` */
      },
      validateStatus(status) {
        return status >= 200 && status < 300;
      }
    });
  }
}

export default new ApiStoreProvider();
