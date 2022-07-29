<template>
  <!-- 每日推荐 -->
  <div class="recd">
    <van-nav-bar title="今日推荐" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-card v-for="item in state.allMusic" :key="item.id" @click="play(item.id,item.al.picUrl)">
      <template #thumb>
        <img :src="item.al.picUrl" alt style="width:80px;height:80px;" />
      </template>
      <template #title>{{item.al.name}}</template>
      <template #desc>
        <span v-for="desc in item.ar" :key="desc.id" class="flex">{{desc.name?desc.name+'/':''}}</span>
      </template>
      <!-- <template #tags></template> -->
      <!-- <template #tags></template> -->
    </van-card>
  </div>
</template>


  <script setup>
import { useRoute } from "vue-router";
import { Card, NavBar } from "vant";
import { createApp, reactive, onMounted } from "vue";
import { orderDetail, musicUrl } from "../api/banner";
import { useStore } from "vuex";
const app = createApp();
app.use(Card).use(NavBar);

const state = reactive({
  allMusic: [],
  ar: []
});
const route = useRoute();
const store = useStore();
onMounted(() => {
  getMusic();
});
const onClickLeft = () => history.back();
const getMusic = () => {
  const id = route.query.id;
  orderDetail(id, 30).then(res => {
    const { songs } = res;
    state.allMusic = songs;
  });
};
const play = (id, pic) => {
  musicUrl(id).then(res => {
    store.dispatch("musicUrl/setPic", pic);
    store.dispatch("musicUrl/setUrl", res.data[0].url);
  });
};
</script>

  <style>
</style>