import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//获取缓存中的购物车数据
var localStorageCart = JSON.parse(localStorage.getItem('cart') || '[]');
const store = new Vuex.Store({
    state: {
        cart:localStorageCart,
    },
    mutations: {
        addToCart(state, goods){
            let index = state.cart.findIndex(v => v.id === goods.id);
            if(index === -1){
                //如果没有找到
                state.cart.push(goods);
            }else{
                //如果找到了
                state.cart[index].count += parseInt(goods.count);
            }
            //将购物车数据添加到缓存中
            localStorage.setItem('cart',JSON.stringify(state.cart));
        },
        removeGoods(state, goodsId){
            state.cart = state.cart.filter(item => {
                return item.id != goodsId;
            })
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        updateStore(state, goodsInfo){
                state.cart.some(item => {
                    if(item.id == goodsInfo.id){
                        item.count = goodsInfo.count;
                    }
                })
                if(state.cart.length > 0){
                    localStorage.setItem('cart', JSON.stringify(state.cart));
                }
            }
    },
    getters:{
        getAllCount(state){
            var total = 0;
            state.cart.forEach(item => {
                total += item.count;
            })
            return total;
        },
        getTotalPrice(state){
            var total = 0;
            state.cart.forEach(item => {
                total += item.price * item.count;
            })
            return total;
        }
    }
});
export default store;