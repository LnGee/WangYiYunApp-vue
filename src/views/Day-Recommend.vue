<template>
  <!-- 每日推荐 -->
  <div class="recd">
<<<<<<< Updated upstream
=======
    <van-nav-bar
      title="今日推荐"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    <div style="height:100px;width:100%;background-color:#fff;" class="position flex">
      <img :src="state.pic?state.pic:''" class="img" />
      <audio
        ref="audio"
        controls
        :src="state.url"
        style="width:100%;background-color:#fff;"
        autoplay
      ></audio>
    </div>
=======
>>>>>>> Stashed changes
  </div>
</template>

<script>
import { recommend, musicUrl } from "../api/banner";
import { createApp, reactive } from "vue";
<<<<<<< Updated upstream
import { Card } from "vant";

const app = createApp();
app.use(Card);
=======
import { Card,NavBar } from "vant";
import { mapMutations } from "vuex";

const app = createApp();
app.use(Card).use(NavBar);
>>>>>>> Stashed changes
export default {
  setup() {
    const state = reactive({
      music: [],
      url: "",
      pic: "",
      isPlay: false
    });
<<<<<<< Updated upstream
    return {
      state
=======
   
    const onClickLeft = () => history.back();
     return {
      state,
      onClickLeft
>>>>>>> Stashed changes
    };
  },
  created() {
    this.$nextTick(() => {
      this.getMusic();
    });
  },
  methods: {
<<<<<<< Updated upstream
=======
    ...mapMutations('musicUrl',['setUrl','setPic']),
>>>>>>> Stashed changes
    async getMusic() {
      await recommend().then(res => {
        const { dailySongs } = res.data;
        this.state.music = dailySongs;
      });
    },
    play(id, pic) {
      musicUrl(id).then(res => {
<<<<<<< Updated upstream
        this.state.url = res.data[0].url;
        this.state.pic = pic;
        // setTimeout(() => {
        //   this.handlePlayAudio();
        // }, 1000);
=======
        this.setUrl(res.data[0].url)
        this.setPic(pic)
>>>>>>> Stashed changes
      });
    }
    // handlePlayAudio() {
    //   this.$refs.audio.play(); // 这里使用了audio的原生开始播放事件,同样不加on, 并使用ref获取dom
    //   this.state.isPlay = true;
    // }
  }
};
</script>
 
<style lang = "less" scoped>
.flex {
  display: flex;
  /* flex-direction: column; */
}
.recd {
  position: relative;
}
<<<<<<< Updated upstream
.position {
  position: fixed;
  bottom: 0;
}
.img {
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 25px;
  margin: 0 5px;
  margin-top: -6px;
  z-index: 100;
  background-color: #fff;
}
=======

>>>>>>> Stashed changes
</style>