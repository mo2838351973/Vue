export default {
    //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
    //mutation 必须同步执行这个限制，Action 就不受约束！
    incrementAsync({commit}) {
        setTimeout(() => {
            commit('increment')
        }, 1000)
    }
}
