<template>
  <div class="add">
    <router-view />
    <div style="height:100px;width:100%;background-color:#fff;" class="position flex">
      <img :src="state.pic?state.pic:''" class="imgs" />
      <audio
        ref="audio"
        controls
        :src="state.url"
        style="width:100%;background-color:#fff;"
        autoplay
      ></audio>
    </div>
    <tab-bar />
  </div>
</template>
<script>
import TabBar from "@/components/tab-bar.vue";
import {reactive,onMounted} from 'vue'
import {useStore} from 'vuex'
export default{
 components: {
    TabBar
  },
  setup(){
    const state=reactive({
      url:null,
      pic:null
    });
    const store=useStore()
    onMounted(()=>{
      setInterval(()=>{
        getUrl()
      },1000)      
    })
    const getUrl=()=>{
      const {url,pic}=store.state.musicUrl
      state.url=url
      state.pic=pic
    }
    return {
      state,
      getUrl
    }
  }
}
</script>
<style>
.flex {
  display: flex;
  /* flex-direction: column; */
}
.add{
  position: relative;
}
.position {
  position: fixed;
  bottom: 0;
}
.imgs {
  width: 50px ;
  height: 50px ;
  border: 1px solid black;
  border-radius: 25px;
  margin: 0 5px;
  margin-top: -6px;
  z-index: 100;
  background-color: #fff;
}
</style>