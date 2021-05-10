/**
 * 所有的接口请求
 */
import { post } from "./http";
import { stuNum } from "./config";

export const fetchExam = () => post("/examSchedule", { stuNum });

export const fetchReExam = () => post("/examReexam", { stuNum });
