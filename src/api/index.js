import axios from "axios";

const url = "https://service.tlvmall.com/api/search/search";

const instance = axios.create({
  baseURL: url,
});
//I don't have time to set up a request
export const API = {
  //   async sendSearchText(text) {
  //     const res = await instance.post({
  //       searchTerm: text,
  //       requestPage: 0,
  //       pageSize: 16,
  //     });
  //     console.log(res);
  //     return res.data;
  //   },
};
