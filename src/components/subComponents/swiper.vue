<template>
    <div class="swiperContainer">
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in swipeList" :key="item.id">
                <img :src="item.img_url" alt="" srcset="" data-preview-src="" data-preview-group="1">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:["swipeList"],
    created(){
        mui.previewImage();
    }
    
}
</script>
<style lang="less">
    .swiperContainer{
    .mint-swipe{
        height: 280px;        
        .mint-swipe-indicators {
            .mint-swipe-indicator{
                background-color: #ebedf0;
            }
            .mint-swipe-indicator.is-active{
                opacity: 1;
            }
        }
        .mint-swipe-item{
            background-color: #369;      
            img{
                width: 100%;
                height: 100%;
            }      
        }
    }
}
</style>