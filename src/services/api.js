/**
 * 所有的接口请求
 */
import { post } from "./http";

export const getExam = (stuNum) => post("/examSchedule", { stuNum });

export const getReExam = (stuNum) => post("/examReexam", { stuNum });
