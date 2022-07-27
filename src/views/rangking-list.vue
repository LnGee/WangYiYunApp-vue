<template>
    <div>
        <van-tabs v-model:active="activeName" scrollspy sticky>
            <van-tab v-for="index in 7" :key="index" :title="'选项 ' + index" name="a">
                <Govern-Ment />
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import { createApp ,reactive,ref} from 'vue';
import { Tab, Tabs } from 'vant';
import GovernMent from '@/components/govern-ment.vue'
const app = createApp();
app.use(Tab).use(Tabs);
export default{
    components:{
        GovernMent
    },
    setup(){
        const activeName = ref('a');
        const state=reactive({

        })
        return {
            state,
            activeName
        }
    }
}
</script>
<style>
</style>