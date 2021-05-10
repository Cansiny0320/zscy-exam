/**
 * 所有的接口请求
 */
import { stuNum } from "./config";
import { post } from "./http";

const transformRequest = (jsonData = {}) =>
  Object.entries(jsonData)
    .map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
    .join("&");

export const fetchExam = () =>
  post("/examSchedule", transformRequest({ stuNum }));

export const fetchReExam = () =>
  post("/examReexam", transformRequest({ stuNum }));
