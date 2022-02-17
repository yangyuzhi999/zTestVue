/*
 * @Author: yangyuzhi
 * @Date: 2021-10-08 14:17:19
 * @LastEditTime: 2022-02-17 09:13:18
 * @LastEditors: yangyuzhi
 * @Descripttion:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import less from "less";
import "ant-design-vue/dist/antd.css";
import { Button } from "ant-design-vue";

Vue.use(Button);

Vue.config.productionTip = false;
Vue.use(less);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
