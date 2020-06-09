<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='199'>
        <button class="mui-btn mui-btn-numbox-minus" type="button" @click.stop="subtract" :disabled="subDis">-</button>
        <input id="test" readonly class="mui-input-numbox" type="number" :value="currentCount"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button" @click.stop="add" :disabled="addDis">+</button>
    </div>
</template>
<script>
export default {
    props:[
        "min","max","initCount","goodsId", "isChangeStore"
    ],
    data(){
        return {
            currentCount: 1,
            subDis: true,
            addDis: false,
        }
    },
    created(){
        this.currentCount = this.initCount;
    },
    methods:{
        subtract(){
            if(this.currentCount > this.min){
                this.currentCount--;                
            }
            this.setDisable();
        },
        add(){
            if(this.currentCount < this.max){
                this.currentCount++;
            }
            this.setDisable(); 
        },
        setDisable: function(){            
            if(this.currentCount >= this.max){
                this.subDis = false;
                this.addDis = true;
            }else{
                if(this.currentCount <= this.min){
                    this.subDis = true;
                    this.addDis = false;
                }else{
                    this.subDis = false;
                    this.addDis = false;
                }
            }
        },
    },
    watch:{
        'currentCount' : function(newVal, oldValue){
            this.$emit('getGoodsCount', newVal);

            if(this.isChangeStore){
                var goodsInfo = {id: this.goodsId, count: this.currentCount};
                this.$store.commit('updateStore', goodsInfo);
            }
        }
    }
}
</script>
<style lang="less">
    
</style>