<template>
     <div>
            <button v-on:click="submit">open</button>
            <modal v-bind:tip="tip" v-bind:active="active" v-bind:call-back="callBack"></modal>
        </div>
</template>
<script>
    import Modal from './Modal';
    export default{
        data(){
            return {
                tip: '操作操作操作操作',
                active: false
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
        }
    }
</script>