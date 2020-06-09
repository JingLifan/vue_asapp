<template>
    <div class="homeContainer">
        <!-- 轮播图 -->
        <swiper :swipeList="this.swipeList"></swiper>
        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/newslist">
                    <img :src="one">
                    <div class="mui-media-body">安师新闻</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/imagelist">
                    <img :src="two">
                    <div class="mui-media-body">光影安师</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/goodslist">
                    <img :src="three">
                    <div class="mui-media-body">安师商城</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a href="#">
                    <img :src="fore">
                    <div class="mui-media-body">记录安师</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a href="#">
                    <img :src="five">
                    <div class="mui-media-body">一卡通</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a href="#">
                    <img :src="six">
                    <div class="mui-media-body">校园社团</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a href="#">
                    <img :src="seven">
                    <div class="mui-media-body">户外出行</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a href="#">
                    <img :src="eight">
                    <div class="mui-media-body">休闲娱乐</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a href="#">
                    <img :src="nine">
                    <div class="mui-media-body">考研交流</div>
                </a>
            </li>            
        </ul> 
    </div>
</template>
<script>
import swiper from '../subComponents/swiper.vue';
import one from '../../images/menu1.png';
import two from '../../images/menu2.png';
import three from '../../images/menu3.png';
import fore from '../../images/menu4.png';
import five from '../../images/menu5.png';
import six from '../../images/menu6.png';
import seven from '../../images/menu7.png';
import eight from '../../images/menu8.png';
import nine from '../../images/menu9.png';
export default {
    data(){
        return {
            swipeList:[],
            one:one,
            two:two,
            three:three,
            fore:fore,
            five:five,
            six:six,
            seven:seven,
            eight:eight,
            nine:nine,
        }
    },
    methods:{
        getSwipeList(){
            this.$ajax({
                method:'GET',
                url:'/sliderlist',
            }).then(res => {
                this.swipeList = res.data.Data;
            })
        }
    },
    created(){
        this.getSwipeList();
    },
    components:{
        swiper,
    }
}
</script>
<style lang="less">
    .homeContainer{
        .mint-swipe{
            height: 250px;
            .mint-swipe-items-wrap{
                .mint-swipe-item{
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .mui-grid-view{
            .mui-table-view-cell{
                padding: 0;
                a{
                    img{
                        width: 35%;
                    }
                    .mui-media-body{
                        font-size: 0.9rem;
                    }
                }
            }
        }
    }
</style>