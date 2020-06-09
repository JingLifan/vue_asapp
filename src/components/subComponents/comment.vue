<template>
    <div class="commentContainer">
        <div class="commentHeader">
            <h5>观点</h5>           
        </div>
        <div class="commentlist">
            <ul>
                <li v-for="item in list" :key="item.id">
                    <p>
                        <span class="mui-icon mui-icon-contact"></span>
                        <span class="user">匿名用户</span>
                        <span class="add_time">{{item.add_time | dateFormat}}</span>
                    </p>
                    <P class="content">{{item.content}}</P>
                </li>
            </ul>
            <button type="button" class="mui-btn mui-btn-danger mui-btn-outlined mui-btn-block" @click="loadMoreComments">加载更多评论</button> 
        </div>
        <div class="comment">
            <p><span>发表我的观点</span> <span @click="postComment">发送</span></p>
            <textarea class="txtMsg" rows="3" placeholder="优质的观点将在前排展示" v-model="msg"></textarea>          
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import qs from 'qs';
export default {
    data(){
        return {
            pageindex: 1,
            pagesize: 10,
            list: [], 
            msg:'',
        }
    },
    created(){
        this.getComments();
    },
    methods:{
        getComments(){
            this.$ajax({
                method:'GET',
                url:'comment',
                params:{
                    srcid: this.id,
                    pageindex: this.pageindex,
                    pagesize: this.pagesize
                }
            }).then(res => {
                console.log(res);
                if(res.data.Status === 0){
                    if(res.data.Data.length>0){
                        this.list = this.list.concat(res.data.Data);
                    }else{
                        Toast('没有更多评论');
                    }
                }else{
                    Toast('数据请求失败');
                }
            })
        },
        //点击加载更多评论
        loadMoreComments(){
            this.pageindex++;
            this.getComments();
        },
        //postComment发送评论
        postComment(){
            if(this.msg.length>0){
                this.$ajax({
                    method:'POST',
                    url:'/comment',
                    data: qs.stringify({
                        srcId : this.id,
                        content: this.msg,
                        add_time: new Date()
                    })
                }).then(res => {
                    this.list.unshift({id:'', content: this.msg, srcId: this.id, add_time: new Date()});
                    this.msg = '';
                })
            }else{
                Toast('不能发表空评论');
            }
        }
    },
    props:["id"],
}
</script>
<style lang="less">
    .commentContainer{
        .commentHeader{
            padding: 10px 0 5px 0;
            border-bottom: 1px solid #ddd;
            h5{
                border-left: 5px solid #ce0000;
                padding-left: 10px;
                font-size: 18px;
                font-family: '微软雅黑';
                font-weight: bold;
                color: #333;
                
            }
        }
        .commentlist{
            ul{
                list-style: none;
                padding: 0;
                li{
                    padding: 0;
                    margin: 0;

                    p{
                        padding: 5px 0;
                        margin: 0;
                        font-size: 14px;;
                        span.user{
                            padding-right: 20px;
                            font-family: '微软雅黑';
                            color: darkgoldenrod;
                        }                    
                    }
                    p.content{
                        padding-left: 28px;
                        font-size: 14px;
                        border-bottom: 1px solid #ddd;
                    }
                }
            }
            .mui-btn{
                padding: 5px 0;
            }
        }
        .comment{
            p{
                display: flex;
                justify-content: space-between;            
                span{
                    padding: 5px 10px;
                }
            }
            .txtMsg{
                color: #444;
                font-size: 14px;
            }
        }
}
</style>