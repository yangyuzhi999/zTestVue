<!--
 * @Author: yangyuzhi
 * @Date: 2021-10-08 14:17:19
 * @LastEditTime: 2022-02-17 10:34:51
 * @LastEditors: yangyuzhi
 * @Descripttion: 
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <a-button type="primary" @click="toAbout">关于</a-button>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    toAbout() {
      this.$router.push({
        path: "/about",
      });
    },
  },
};
</script>
