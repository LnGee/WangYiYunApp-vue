<template>
  <div class="hello">
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/about" icon="search">关注</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">云村</van-tabbar-item>
      <van-tabbar-item replace to="/" icon="search">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { createApp, ref } from "vue";
import { Tabbar, TabbarItem } from "vant";
const app = createApp();
app.use(Tabbar);
app.use(TabbarItem);
export default {
  name: "TabBar",
  props: {
    msg: String
  },
  setup() {
    const active = ref(0);
    return { active };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.van-tabbar {
  height: 50px !important;
}
</style>
