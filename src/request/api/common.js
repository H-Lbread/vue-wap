import base from "../base.js"; //导入接口域名列表
import axios from "../http.js"; //导入http中创建的axios实例

const common = {
  baseInfo(params) {
    //获取保单个人基表数据
    return axios.post(`${base.keeperEntry}/getUpdate`, params);
  },
  wechatSignatureinfo() {
    //微信验签
    let _url = window.location.href.split("#")[0];
    return axios.get(
      `${base.ucEntry}/api/v2/wechat/signatureinfo/get?page_url=${_url}`,
      {
        headers: {
          appid: process.env.VUE_APP_APPID,
        },
      }
    );
  },
  createVipmessage(params) {
    return axios.post(`${base.ucEntry}/coupon/createVipmessage`, params, {
      headers: {
        appid: process.env.VUE_APP_C_APPID,
      },
    });
  },
  getUserInfo() {
    //获取用户信息
    return axios.get(
      `${base.ucEntry}/api/v1/user/query?token=${getCookie("uc_token")}`
    );
  },
  getServerTime(params) {
    //获取服务器时间
    return axios.post(`${base.entry}/api/v1/client/servetTime`, params);
  },
};

export default common;
