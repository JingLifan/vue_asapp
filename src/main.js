//导入vue
import Vue from 'vue';
//导入app.vue组件
import app from './app.vue';

//导入icon-font图标库
import './lib/mui/css/icon-font.css'
//导入VueRouter
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//导入router.js
import router from './router.js'
//导入MintUi组件库
import MintUi from 'mint-ui';
//导入Mint-UI样式库
import 'mint-ui/lib/style.css';
Vue.use(MintUi);
//导入axios
import axios from 'axios';
//配置请求域名
axios.defaults.baseURL = 'http://www.barteam.cn:8086';
//axios不支持Vue.use()的语法挂载
Vue.prototype.$ajax = axios;
//导入日期格式化工具moment
import Moment from 'moment';
//格式化日期过滤器
Vue.filter('dateFormat',function(dataStr, pattern = 'YYYY-MM-DD HH:MM'){
    return Moment(dataStr).format(pattern);
})
//导入vue-preview预览图组件
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

//导入store仓储模块
import store from './store.js'

//使用MUI的图片预览插件步骤
//1.引入mui.css
//2.引入mui.min.js，mui.zoom.js，mui.previewimage.js
// import './lib/mui/js/mui.js';
// import './lib/mui/js/mui.zoom.js';
// import './lib/mui/js/mui.previewimage.js';
//3.
//导入预览图片插件所需css文件
import './lib/previewImg.css';
//导入mui样式包
import './lib/mui/css/mui.css';
// import './lib/mui/css/mui.min.css';
import mui from './lib/mui/js/mui.min.js';
import './lib/mui/js/mui.zoom.js'
import './lib/mui/js/mui.previewimage.js'


//创建vm对象
var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router,
    store,
})