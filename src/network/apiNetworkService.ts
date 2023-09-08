import { Endpoints } from "./endpoints";
import http from "./http";
const baseUrlEnv = import.meta.env.VITE_REACT_APP_BASE_URL;

export class ApiNetworkService {
  static getGithubUsers() {
    return http.get(`${baseUrlEnv}/${Endpoints.USERS}`);
  }
}
