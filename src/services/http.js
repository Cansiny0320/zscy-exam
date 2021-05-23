/**
 * 封装请求方法
 */
import axios from "./axios";

export async function get(url, params = {}) {
  try {
    return axios.get(url, { params });
  } catch (error) {
    throw new Error(error);
  }
}

export async function post(url, data = {}, config = {}) {
  try {
    return axios.post(url, data, config);
  } catch (error) {
    throw new Error(error);
  }
}

export async function patch(url, data = {}, config = {}) {
  try {
    return axios.patch(url, data, config);
  } catch (error) {
    throw new Error(error);
  }
}

export async function put(url, data) {
  try {
    return axios.put(url, data);
  } catch (error) {
    throw new Error(error);
  }
}

export function del(url) {
  return axios.del(url).catch((error) => {
    throw new Error(`[RWV] ApiService ${error}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  });
}
