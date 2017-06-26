<template>
    <div>
                <ul>
                    <li v-for="item in lists">{{item}}</li>
                </ul>
                <button v-on:click="openDialog">删除</button>
                <c-dialog v-bind:show-flag="showFlag" v-bind:success-callback="delSuccess" v-bind:cancel-callback="cancel"></c-dialog>
        </div>
</template>
<script>
import Dialog from './Dialog';
    export default{
        data(){
            return {
                showFlag: false,
                lists: [
                    "list-11111111111111",
                    "list-222222222222222",
                    "list-333333333333333",
                    "list-444444444444444"
                ]
            }
        },
        methods:{
            openDialog(){
                this.showFlag=true;
            },
            delSuccess() {
                this.lists.pop();
               this.showFlag=false;
            },
            cancel(){
                this.showFlag=false;
            }
        },
        components:{
            'c-dialog':Dialog
        }
    }

</script>
<style lang="scss">
    
</style>