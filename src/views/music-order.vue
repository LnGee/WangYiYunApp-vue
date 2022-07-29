<template>
  <div>
    <van-tabs v-model:active="active" scrollspy sticky>
      <van-tab v-for="item in state.list" :title="item.text" :key="item.orderId">
        <div>
          <div>{{item.text}}</div>
          <van-card
            :key="item.orderId"
            :desc="描述信息"
            :title="商品标题"
            :thumb="item.url"
            @click="nav(item.orderId)"
          >
            <template #tags>
              <van-tag plain type="danger">标签</van-tag>
              <van-tag plain type="danger">标签</van-tag>
            </template>
          </van-card>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
import { createApp, onMounted, ref, reactive } from "vue";
import { Tab, Tabs, Card } from "vant";
import { orderList } from "../api/banner";
import { useRouter } from "vue-router";
const app = createApp();
app
  .use(Tab)
  .use(Tabs)
  .use(Card);

const active = ref(0);
const router = useRouter();
const state = reactive({
  list: []
});
onMounted(() => {
  ordersList();
});

const ordersList = () => {
  orderList().then(res => {
    const { list } = res;
    state.list = list.map(({ name, coverImgUrl, id }) => {
      return {
        text: name,
        url: coverImgUrl,
        orderId: id
      };
    });
  });
};

const nav = orderId => {
  router.push({ path: "orderDetail", query: { id: orderId } });
};
</script>
 
<style lang = "less" scoped>
</style>