<template>
    <div class="newslistContainer">
        <ul class="newsList"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="isLoadingMore"
            infinite-scroll-distance="10"
            style="max-height: 100vh; overflow-y: auto;">
            <li v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsinfo/' + item.id">
                    <p class="news_title">{{item.title}}</p>
                    <p class="news_des">
                        <span class="author">{{item.author}}</span>
                        <span class="add_time">{{item.add_time | dateFormat}}</span>
                        <span class="click_count">阅读:{{item.click_count}}</span>
                    </p>
                </router-link>
            </li>
            <li class="more_loading">
                <span v-show="is_loading_more" class="mui-spinner"></span>
                <span v-show="finished" class="finished">已经全部加载</span>
            </li>
        </ul>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    name:'newslist',
    data(){
        return {
            newsList:[],
            isLoadingMore:false, //是否继续出发无线滚动，若为true则无线滚动不会触发
            pageSize:10,
            pageindex:1,
            is_loading_more:true,
            finished:false
        }
    },
    methods:{
        loadMore(){
            this.is_loading_more = true;
            this.finished = false;
            this.$ajax({
                method:'GET',
                url:'/news/newslist',
                params:{
                    pageindex:this.pageindex,
                    pageSize:this.pageSize,
                }
            }).then(res => {
                if(res.data.Status === 0){
                    if(res.data.Data.length>0){
                        res.data.Data.forEach(v => {
                            v.add_time = new Date();
                        })
                        this.newsList = [...this.newsList, ...res.data.Data];
                        this.pageindex ++;
                    }else{
                        this.isLoadingMore = true;
                        Toast('暂时没有更多数据');
                        this.is_loading_more = false;
                        this.finished = true;
                    }
                }else{
                    Toast('请求失败，请检查网络');
                }
            })
        }
    },
    created(){

    }
}
</script>
<style lang="less">
    .newslistContainer{
        .newsList {
            list-style: none;
            padding: 0px 16px;
            .more_loading{
                font-size: 12px;
                display: flex;
                justify-content: center;
                border-bottom: 0;
                .finished{
                    text-align: center;
                }
                .mui-spinner{
                    text-align: center;
                }
            }
            li {
                padding: 10px 0;
                border-bottom: 1px solid #ddd;
            p {
                margin: 0;
            }
            p.news_title {
                font-size: 16px;
                color: #333;
            }
            p.news_des {
                padding-top: 5px;
                font-size: 12px;
                color: #aaa;
                display: flex;
                justify-content: space-between;
                span {
                margin-right: 5px;
                }
            }
            }
        }
    }
</style>