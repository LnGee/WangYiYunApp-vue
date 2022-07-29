<template>
  <div>
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <div style="padding:5px 20px;">
      <div
        v-for="item in state.music"
        :key="item.musicId"
        @click="play(item.musicId,item.info.picUrl)"
        class="flex py"
      >
        <img :src="item.info.picUrl" alt class="img" />
        <div class="flex item-center justify-between">
          <div class="flex ml line">
            <div>{{item.info.name}}</div>
            <div v-for="desc in item.singer" :key="desc.id">{{desc.name?desc.name+'/':''}}</div>
          </div>
          <div>
            <van-icon name="play-circle-o" style="font-size:16px;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { musicUrl, orderDetail } from "../api/banner";
import { createApp, reactive, onMounted } from "vue";
import { Card, NavBar } from "vant";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const app = createApp();
app.use(Card).use(NavBar);
const store = useStore();
const route = useRoute();
const onClickLeft = () => history.back();

const state = reactive({
  music: [],
  url: "",
  pic: "",
  isPlay: false
});

onMounted(() => {
  getAllMusic();
});

const getAllMusic = () => {
  const id = route.query.id;
  orderDetail(id, 10).then(res => {
    const { songs } = res;
    state.music = songs.map(({ id, al, ar }) => {
      return {
        musicId: id,
        info: al,
        singer: ar
      };
    });
  });
};

// const getMusicInfo = id => {
//   musicUrl(id).then(res => {
//     console.log(res);
//   });
// };

const play = (id, pic) => {
  musicUrl(id).then(res => {
    store.dispatch("musicUrl/setUrl", res.data[0].url);
    store.dispatch("musicUrl/setPic", pic);
  });
};
</script>
 
<style lang = "less" scoped>
.py {
  margin: 14px 0;
  border: 1px solid #fff;
  border-radius: 10px;
  box-shadow: 0px 0 12px 1px rgba(0, 0, 0, 0.16);
  padding: 5px 10px;
}
.flex {
  display: flex;
  /* flex-direction: column; */
}
.recd {
  position: relative;
}
.img {
  width: 80px;
  height: 80px;
}
.ml {
  margin-left: 8px;
  font-family: unset;
}
.line {
  line-height: 14px;
  margin: 10px;
  font-size: 12px;
}
.item-center {
  align-content: center;
}
.justify-between {
  justify-content: space-between;
}
</style>