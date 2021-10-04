import axios from "axios";
import { DOMAIN } from "../global/constant";

class ApiService {
  get = (url) =>
    axios({
      url: `${DOMAIN}/${url}`,
      method: "GET"
    });
  delete = (url) =>
    axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE"
    });

  post = (url, data) =>
    axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data
    });
  put = (url, data) =>
    axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data
    });
}

export const apiService = new ApiService();
