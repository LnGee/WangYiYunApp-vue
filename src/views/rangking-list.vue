<template>
  <div>
    <van-tabs v-model:active="activeName" scrollspy sticky>
      <van-tab v-for="index in 7" :key="index" :title="'选项 ' + index" name="a">
        <govern-ment />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup>
import { createApp, ref } from "vue";
import { Tab, Tabs } from "vant";
import GovernMent from "@/components/govern-ment.vue";
const app = createApp();
app.use(Tab).use(Tabs);
const activeName = ref("a");
// const state = reactive({});
</script>
<style>
</style>