<template>
    <div class="appContainer">
        <!-- header -->
        <header id="header" class="mui-bar mui-bar-nav">
			<a v-if="showBack" @click="goBack" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">安师生活</h1>
		</header>
        <!-- 内容 -->
        <div class="mui-content">
            <keep-alive include="newslist,imageList">
                <router-view></router-view>
            </keep-alive>
        </div>
        <!-- tabbar -->
        <div class="footer">
            <nav class="mui-bar mui-bar-tab">
                <router-link class="mui-tab-item-my" :class="{on:'/home'===$route.path}" to="/home">
                    <span class="mui-icon iconfont icon-shouye"></span>
                    <span class="mui-tab-label">首页</span>
                </router-link>
                <router-link class="mui-tab-item-my" :class="{on:'/classes'===$route.path}" to="/classes">
                    <span class="mui-icon iconfont icon-fenlei"></span>
                    <span class="mui-tab-label">分类</span>
                </router-link>
                <router-link class="mui-tab-item-my" :class="{on:'/find'===$route.path}" to="/find">
                    <span class="mui-icon iconfont icon-faxian"></span>
                    <span class="mui-tab-label">发现</span>
                </router-link>
                <router-link class="mui-tab-item-my" :class="{on:'/cart'===$route.path}" to="/cart">
                    <span class="mui-icon iconfont icon-gouwuche">
                        <span class="mui-badge" id="badge">{{this.$store.getters.getAllCount}}</span>
                    </span>
                    <span class="mui-tab-label">购物车</span>
                </router-link>
                <router-link class="mui-tab-item-my" :class="{on:'/user'===$route.path}" to="/user">
                    <span class="mui-icon iconfont icon-wode"></span>
                    <span class="mui-tab-label">我的</span>
                </router-link>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            showBack:false,//是否显示回退箭头，默认不显示
        }
    },
    methods:{
        goBack(){
            //$route是管理路由和路由传参的
            //$router是管理url的
            this.$router.go(-1);
        }
    },
    created(){
        if(this.$route.path === '/home'){
            this.showBack = false;
        }else{
            this.showBack = true;
        }
    },
    //监听路由
    watch:{
        '$route.path' : function(newVal, oldVal){
            if(newVal === '/home'){
                this.showBack = false;
            }else{
                this.showBack = true;
            }
        }
    }
}
</script>
<style lang="less">
    .appContainer{
        header{
            background-color: #ce0000;
            a{
                color: #fff;
            }
            h1{
                color: #fff;
                font-weight: bold;
            }
        }
        .mui-content{
            padding-bottom: 44px;
        }
        .footer{
            .mui-bar-tab{
                .router-link-active{
                    color: #ce0000!important;
                }
                .on{
                    color: #ce0000!important;
                }
                .mui-tab-item-my
                {
                    display: table-cell;
                    overflow: hidden;
                    width: 1%;
                    height: 50px;
                    text-align: center;
                    vertical-align: middle;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: #929292;
                    .mui-icon
                    {
                        top: 3px;
                        width: 24px;
                        height: 24px;
                        padding-top: 0;
                        padding-bottom: 0;
                    }
                    .mui-icon ~ .mui-tab-label
                    {
                        font-size: 11px;
                        display: block;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .mui-icon:active
                    {
                        background: none;
                    }
                }
                .mui-tab-item-my.mui-active
                {
                    color: #007aff;
                }
            }
        }
    }
</style>