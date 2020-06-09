<template>
    <div class="goodsinfoContainer">
        <!-- 轮播图 -->
        <swiper :swipeList="this.swiperList"></swiper>
        <div class="goodsInfo">
            <p class="price">
                <span class="sell_price"><span class="label">￥</span>{{this.goodsInfo.sell_price}}</span>
                <span class="market_price"><span class="label">商场价:</span>{{this.goodsInfo.market_price}}</span>
            </p>
            <p class="title">{{this.goodsInfo.title}}</p>
            <p class="abstract">{{this.goodsInfo.abstract}}</p>
            <p class="add_time"><span class="label">发布时间:</span>{{this.goodsInfo.add_time | dateFormat}}</p>
            <p class="count">
                <span class="stock">
                    <span class="label">库存:</span>
                    {{this.goodsInfo.stock}}
                </span>
                <span class="click_count">
                    <span class="label">关注度:</span>
                    {{this.goodsInfo.click_count}}
                </span>
            </p>    
            <p>
                <span class="label">购买数量:</span>
                <number-box :min="1" :max="this.goodsInfo.stock" :initCount="1" @getGoodsCount="getGoodsCount" :goodsId="this.goodsId" :isChangeStore="false"></number-box>
            </p>
            <p>
                <button type="button" class="mui-btn mui-btn-warning" @click="addToCart">加入购物车</button>
				<button type="button" class="mui-btn mui-btn-danger">立即购买</button>
            </p>
            
        </div>
        <div class="sellerInfo">
            <h3>卖家信息</h3>
            <p class="seller">
                <span class="label">卖家:</span>
                {{this.goodsInfo.seller}}
            </p>
            <p class="seller_phone">
                <span class="label">电话:</span>
                {{this.goodsInfo.seller_phone}}
            </p>            
        </div>
        <!-- 商品图片详情 -->
        <div class="img_info">
            <img v-for="item in swiperList" :key="item.id" :src="item.img_url" alt="" >
        </div>
        <!-- 评论组件 -->
        <comment :id="this.goodsId"></comment>
    </div>
</template>
<script>
import swiper from '../subComponents/swiper.vue';
import comment from '../subComponents/comment.vue';
import numberBox from '../subComponents/numberBox.vue';
export default {
    data(){
        return {
            swiperList: [], //轮播图 图片数组
            goodsId: this.$route.params.id, //获取商品id
            goodsInfo:{},
            goodsCount:1,
        }
    },
    created(){
        this.getSwiperData();
        this.getGoodesInfo();
    },
    methods: {
        getSwiperData(){
            this.$ajax({
                method: 'get',
                url: '/thumbs/' + this.goodsId,
            }).
            then(response => {
                if(response.data.Status == 0){ //正确拿到轮播图数据
                    this.swiperList = response.data.Data;

                }else{
                    Toast('无法加载轮播图');
                }
            })
        },
        getGoodesInfo(){
            this.$ajax({
                method: 'get',
                url: '/goods/goodsinfo',
                params: {
                    goodsid : this.goodsId,
                }
            }).
            then(response => {
                if(response.data.Status == 0){ //正确拿到数据
                    this.goodsInfo = response.data.Data[0];
                }else{
                    Toast('无法加载');
                }
            })
        },
        addToCart(){
            let goods = {
                id: this.goodsId, 
                title: this.goodsInfo.title, 
                price: this.goodsInfo.sell_price, 
                img_url: this.goodsInfo.img_url, 
                count: this.goodsCount,
                stock: this.goodsInfo.stock
            };
            this.$store.commit("addToCart", goods);
        },
        //传给子组件numberbox的方法
        getGoodsCount(count){
            this.goodsCount = count;
        }
    },
    components:{
        swiper,
        comment,
        numberBox,
    }
}
</script>
<style lang="less">
.goodsinfoContainer{
    padding: 5px; 
    // 小球
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #ce0000;
        position: absolute;
        z-index: 99;
        left: 168px;
        top: 585px;
    }
    .goodsInfo, .sellerInfo{
        background-color: #fff;
        padding: 5px;
        border-radius: 5px;
        margin-bottom: 10px;
        p{
            font-size: 14px;
            line-height: 16px;
            color: #333;
            margin: 20px;
            .label{
                color: #999;
                margin-right: 20px;
            }
        }   
    }
    .goodsInfo{
        .sell_price{
            color: #ce0000;
            font-size: 28px;
            font-weight: bold;
            margin-right: 20px;
            .label{
                font-size: 12px;
                color: #ce0000;
                margin: 0;
            }
        }
        .market_price{
            font-size: 14px;
            text-decoration: line-through;
            .label{
                margin: 0;
            }
        }
        .title{
            font-size: 16px;
            font-weight: bold;
        }
        .abstract{
            font-size: 15px;
            line-height: 18px;
        }
        .click_count{
            margin-left: 50px;
        }
    }
    .sellerInfo{
        h3{
            font-size: 14px;
            color: #888;
            padding-left: 20px;
        }
    }
    .img_info{
        img{
            width: 100%;
        }
    }
}
</style>
