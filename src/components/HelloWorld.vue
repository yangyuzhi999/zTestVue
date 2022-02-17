<!--
 * @Author: yangyuzhi
 * @Date: 2021-10-08 14:17:19
 * @LastEditTime: 2022-02-16 16:51:34
 * @LastEditors: yangyuzhi
 * @Descripttion: 
-->
<template>
  <div class="hello">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
