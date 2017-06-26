<template>
    
     <div class="dialog-container" v-bind:class="{show: showFlag}" v-on:click="cancel">
                <div class="content" v-on:click="stopPop">
                    <div>
                        <p class="msg">确定?</p>
                    </div>
                    <div class="btn">
                        <a class="cancel" v-on:click="cancel">取消</a>
                        <a class="sure" v-on:click="sure">确定</a>
                    </div>
                </div>
            </div>
</template>
<script>
    export default {
        data(){
            return {
              
            }
        },
        props:{
            showFlag:{
                type: Boolean,
            },
            cancelCallback:{
                type: Function
            },
            successCallback:{
                type: Function
            }
        },
        computed:{
           
        },
        methods:{
            stopPop(e){
                e.stopPropagation();
            },
            cancel(){
                if(this.cancelCallback){
                    this.cancelCallback();
                }
            },
            sure(){
                if(this.successCallback){
                    this.successCallback();
                }
            }
        },
        beforeMount(){
                console.dir('beforeMount');
        },
        mounted(){
            console.dir('mounted');
        },
        beforeUpdate(){
            //beforeupdate 无法监测props的变化， computed却可以
            //console.dir(this.showFlag);
            //this.show=this.showFlag;
            //console.dir(this.show);
            console.dir('beforeUpdate');
        },
        updated(){
            console.dir('updated');
        }
    }
</script>
<style lang="scss">
    .dialog-container {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        opacity: 0;
        transition: opacity 1s, z-index 1s;
        z-index: -1;
        &.show {
            opacity: 1;
            z-index: 99;
            .content {
                left: 50%;
                top: 50%;
                width: 400px;
                height: 260px;
            }
        }
        .content {
            position: absolute;
            left: -20px;
            top: -50px;
            width: 240px;
            height: 156px;
            margin: -130px 0 0 -200px;
            box-shadow: 0 0 0 2px #666;
            background: #fff;
            border-radius: 5px;
            transition: left 1s, top 1s, width 1s, height 1s;
            transition-timing-function: cubic-bezier(1, -0.02, .03, 1.32);
        }
        .msg {
            text-align: center;
            font-size: 20px;
            margin-top: 50px;
        }
        .btn {
            margin-top: 20%;
            text-align: center;
            a {
                display: inline-block;
                width: 70px;
                height: 25px;
                line-height: 25px;
                padding: 5px;
                margin: 0 20px;
                color: #fff;
                border-radius: 5px;
                cursor: pointer;
                &.sure {
                    background: #81c784;
                    &:hover {
                        background: #66bb6a;
                    }
                }
                &.cancel {
                    background: #e57373;
                    &:hover {
                        background: #ef5350;
                        ;
                    }
                }
            }
        }
    }

</style>