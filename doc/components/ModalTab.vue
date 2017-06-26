<template>
     <div class="modal-test">
            <a class="view-src" href="https://github.com/1451417401/Vue-cui/tree/master/src/modal">view src---modal</a>
            <button class="btn" v-on:click="submit">open modal</button>
            <modal v-bind:tip="tip" v-bind:active="active" v-bind:call-back="callBack"></modal>
        </div>
</template>
<script>
    import Modal from '../../src/modal/Modal';
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
<style lang="scss">
    .modal-test {
    .btn {
        display: inline-block;
        height: 30px;
        padding: 0 20px;
        line-height: 30px;
        border: 1px solid #eee;
        background: #f9f9f9;
        text-align: center;
        cursor: pointer;
        border-radius: 5px;
        &:hover {
            background: #eee;
        }
    }
}

</style>