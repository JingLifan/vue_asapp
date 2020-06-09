import VueRouter from 'vue-router'; //导入vuerouter包
//Vue.use(VueRouter); //把路由对象，注册到Vue身上
import home from './components/tabbar/home.vue';
import classes from './components/tabbar/classes.vue';
import find from './components/tabbar/find.vue';
import cart from './components/tabbar/cart.vue';
import user from './components/tabbar/user.vue';
import newslist from './components/news/newslist.vue';
import imagelist from './components/photo/imagelist.vue';
import goodslist from './components/goods/goodslist.vue';
import newsinfo from './components/news/newsinfo.vue';
import imageinfo from './components/photo/imageinfo.vue';
import goodsinfo from './components/goods/goodsinfo.vue';

var router = new VueRouter({
    routes: [
       {path:'/', redirect:'/home'},
       {path:'/home', component:home},
       {path:'/classes', component:classes},
       {path:'/find', component:find},
       {path:'/cart', component:cart},
       {path:'/user', component:user},
       {path:'/user', component:user},
       {path:'/home/newslist', component:newslist},
       {path:'/home/newsinfo/:id', component:newsinfo},
       {path:'/home/imagelist', component:imagelist},
       {path:'/home/goodslist', component:goodslist},
       {path:'/home/imageinfo/:id', component:imageinfo},
       {path:'/home/goodsinfo/:id', component:goodsinfo, name:'goodsinfo'},
    ]
})
export default router; //重点，当分离出来router.js模块后，一定要把router路由规则对象给暴露出去