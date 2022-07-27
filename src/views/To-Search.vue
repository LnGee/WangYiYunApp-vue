<template>
  <div>
    <van-search
      v-model="state.keywords"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
      @blur="getSearch"
    />
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

<script>
import { search } from "./../api/banner";
import { createApp, reactive } from "vue";
import { Search, Card } from "vant";

const app = createApp();
app.use(Search).use(Card);
export default {
  setup() {
    const state = reactive({
      keywords: "",
      music: []
    });
    return {
      state
    };
  },
  methods: {
    getSearch() {
      search(this.state.keywords).then(res => {
        this.state.music = res.result.songs;
      });
    }
  }
};
</script>
 
<style lang = "less" scoped>
</style>