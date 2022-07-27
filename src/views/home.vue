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
    <!-- 推荐歌单 -->
    <div>
      <div class="flex justify-around">
        <span>推荐歌单</span>
        <span>更多</span>
      </div>
      <div class="flex" style="overflow:auto;">
        <div v-for="(item) in order.orders" :key="item.id" style="margin-right:5px;" @click="get(item.id)">
          <img :src="item.picUrl" alt="" style="width:100px;height:100px;border-radius: 10%;">
          <p style="font-size:10px;">{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { createApp, reactive ,onMounted} from "vue";
import { Swipe, SwipeItem, Grid, GridItem } from "vant";
import { banner,musicOrder } from "../api/banner";
import {useRouter} from 'vue-router'

const app = createApp();
app
  .use(Swipe)
  .use(SwipeItem)
  .use(Grid)
  .use(GridItem);
export default {
  name: "HomeView",
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
    const order=reactive({
      orders:[]
    })
    const router=useRouter()
    onMounted(()=>{
      getBanner()
      getOrder()
    });
    const getBanner=() =>{
        banner(2).then(res => {
          state.img = res.banners;
        });
    }
    const navgateto=(path)=>{
      router.push(path);
    };
    const getOrder=()=>{
      musicOrder(6).then(res=>{
        order.orders=res.result
      })
    };
    const get=(ids)=>{
      router.push({path:'records',query:{id:ids}})
    }
    return {
      state,
      nav,
      navgateto,
      order,
      get
    };
  },
};
</script>
<style >
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

.justify-around {
  justify-content: space-around;
}
.justify-evenly{
  justify-content: space-evenly;
}
</style>