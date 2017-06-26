<template>
    <div class="modal" v-bind:class="{active:active}">
                    <p>{{tip}}</p>
                </div>
</template>
<script>
    export default{
        data(){
            return {
                //activeState:false,
                interval:null
            }
        },
        props:{
            tip:{
                type: String
            },
            active:{
                type: Boolean
            },
            callBack:{
                type: Function
            }
        },
        // computed:{
        //     activeComputed:{
        //         get:function(){
        //             return this.active
        //         },
        //         set:function(value){
        //             this.activeState=value;
        //         }
        //     }
        // },
        // watch:{
        //     active: function(value){
        //         console.dir('watch');
        //         console.dir(this.active);
        //         this.activeState=value;
        //         console.dir(this.activeState);
        //     }
        // },
        beforeMount(){
            console.dir("beforeMount");
            //console.dir(this.active);
            //this.activeState=this.active;
        },
        beforeUpdate(){
            //beforUpadate无法检测到props的更新，没有类型react的componentWillReceiveProps方法
            console.dir("beforeUpdate");
            //console.dir(this.active);
            //this.activeState=true;
        },
        updated(){
            console.dir('updated');
            var _this=this;
            clearTimeout(_this.interval);
             if (_this.active) {
            _this.inter = setTimeout(() => {
                this.callBack();
            }, 2000)
        }

        }

    }
</script>
<style lang="scss">
    .modal {
    position: fixed;
    left: -200px;
    top: calc(50% - 50px);
    height: 0;
    z-index: 99;
    opacity: 0;
    transition: left 0.8s ease-in-out, opacity 0.8s;
    &.active {
        opacity: 1;
        height: auto;
        left: calc(50% - 100px);
    }
    p {
        //width: 200px;
        height: 50px;
        line-height: 50px;
        padding: 0 15px;
        text-align: center;
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
    }
}

</style>