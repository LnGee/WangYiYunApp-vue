<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in state.img" :key="item.bannerId">
        <img :src="item.pic" class="img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格导航 -->
    <div class="flex justify-evenly">
      <van-grid v-for="item in nav.grid" :key="item.icon">
        <van-grid-item
          :icon="item.icon"
          :text="item.text"
          @click="navgateto(item.path)"
          class="flex-full"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { createApp, reactive } from "vue";
import { Swipe, SwipeItem, Grid, GridItem } from "vant";
import { banner } from "../api/banner";
const app = createApp();
app
  .use(Swipe)
  .use(SwipeItem)
  .use(Grid)
  .use(GridItem);
export default {
  name: "HomeView",
  components: {},
  setup() {
    const state = reactive({
      img: []
    });
    const nav = reactive({
      grid: [
        { icon: "good-job-o", text: "每日推荐", path: "/recd" },
        { icon: "orders-o", text: "歌单", path: "/order" },
        { icon: "bar-chart-o", text: "排行榜", path: "/ranking" },
        { icon: "wap-home-o", text: "歌房", path: "/musichome" }
      ]
    });
    return {
      state,
      nav
    };
  },
  created() {
    this.$nextTick(() => {
      this.getBanner();
    });
  },
  methods: {
    getBanner() {
      banner(2).then(res => {
        const { state } = this;
        state.img = res.banners;
      });
    },
    navgateto(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="stylus">
.my-swipe .van-swipe-item {
  height: 180px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.img {
  width: 100%;
  height: 180px;
}

.flex {
  display: flex;
}

.flex-full {
  flex: 1;
}

.justify-evenly {
  justify-content: space-evenly;
}
</style>