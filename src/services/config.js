/*
 * @Author: your name
 * @Date: 2020-12-28 19:52:32
 * @LastEditTime: 2020-12-28 20:12:00
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /the-19th-committee/src/services/config.js
 */
export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://be-prod.redrock.team/magipoke-jwzx"
    : "/api";

export const stuNum = localStorage.getItem("stuNum");
