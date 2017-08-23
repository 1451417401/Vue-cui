<template>
     <div>
            <button v-on:click="submit">open</button>
            <modal v-bind:tip="tip" v-bind:active="active" v-bind:call-back="callBack"></modal>
            <div v-if="test.flag">hello world</div>
        </div>
</template>
<script>
    import Modal from './Modal';
    export default{
        data(){
            return {
                tip: '操作操作操作操作',
                active: false,
                test: {}                         //v-if为false时<modal v-if="false"></modal>组件的生命周期函数是不会执行的
                                                 //test={},后面添加的数据是可观察的，数据的改动在下一个update周期渲染到页面
            }
        },
        methods:{
            submit(){
                this.active=true;
            },
            callBack(){
                this.active=false;
            }
        },
        components:{
            modal: Modal
        },
        mounted(){
            console.dir('mounted');
            var _this=this;
            setTimeout(function(){
                _this.test.flag=true;
                console.dir(_this.test)
            },1000)
        }
    }
</script>