import axios from "axios";
import dayjs from "dayjs";
import { Toast } from "vant";
import api from "@/request/index";
// import md5 from 'js-md5'

export default {
  install(Vue) {
    Vue.prototype.$api = api;
    Vue.prototype.$md5 = md5;
    Vue.prototype.$axios = axios;
    Vue.prototype.$dayjs = dayjs;
    Vue.prototype.$Toast = Toast;
  },
};
