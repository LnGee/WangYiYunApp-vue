const musicUrl={
    namespaced: true, // 启动命名空间使用
    state:{
        url:null,
        pic:null
    },
    getters:{

    },
    mutations:{
        setUrl(state,payload){
            state.url=payload
        },
        setPic(state,payload){
            state.pic=payload
        }
    },
    actions:{

    }
}
export default musicUrl