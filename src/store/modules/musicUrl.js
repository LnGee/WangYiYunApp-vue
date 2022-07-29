const musicUrl = {
    namespaced: true, // 启动命名空间使用
    state: {
        url: null,
        pic: null
    },
    getters: {

    },
    mutations: {
        setUrl(state, payload) {
            state.url = payload
        },
        setPic(state, payload) {
            state.pic = payload
        }
    },
    actions: {
        setUrl(context, payload) {
            setTimeout(() => {
                context.commit('setUrl', payload)
            }, 500)
        },
        setPic(context, payload) {
            setTimeout(() => {
                context.commit('setPic', payload)
            }, 500)
        }
    }
}
export default musicUrl