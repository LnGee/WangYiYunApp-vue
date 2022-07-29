<template>
  <!-- 每日推荐 -->
  <div class="recd">
    <van-nav-bar title="今日推荐" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-card v-for="item in state.music" :key="item.al.id" @click="play(item.id,item.al.picUrl)">
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
import { recommend, musicUrl } from "../api/banner";
import { createApp, reactive, onMounted } from "vue";
import { Card, NavBar } from "vant";
import { useStore } from "vuex";

const app = createApp();
app.use(Card).use(NavBar);

const state = reactive({
  music: [],
  url: "",
  pic: "",
  isPlay: false
});

const store = useStore();

const onClickLeft = () => history.back();

onMounted(() => {
  getMusic();
});

const getMusic = () => {
  recommend().then(res => {
    const { dailySongs } = res.data;
    state.music = dailySongs;
  });
};

const play = (id, pic) => {
  musicUrl(id).then(res => {
    store.dispatch("musicUrl/setUrl", res.data[0].url);
    store.dispatch("musicUrl/setPic", pic);
  });
};
// handlePlayAudio() {
//   this.$refs.audio.play(); // 这里使用了audio的原生开始播放事件,同样不加on, 并使用ref获取dom
//   this.state.isPlay = true;
// }
</script>
 
<style lang = "less" scoped>
.flex {
  display: flex;
  /* flex-direction: column; */
}
.recd {
  position: relative;
}
</style>