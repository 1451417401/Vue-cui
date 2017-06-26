<template>
    <div class="dialog-test">
            <a class="view-src" href="https://github.com/1451417401/Vue-cui/tree/master/src/dialog">view src---dialog</a>
            <ul class="list">
                <li v-for="item in lists">{{item}}</li>
            </ul>
            <button class="del" v-on:click="openDialog">删除</button>
            <c-dialog v-bind:show-flag="showFlag" v-bind:success-callback="delSuccess" v-bind:cancel-callback="cancel"></c-dialog>
        </div>
</template>
<script>
import Dialog from '../../src/dialog/Dialog';
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
    .dialog-test {
    text-align: left;
    .list {
        width: 80%;
        margin-bottom: 20px;
        li {
            line-height: 30px;
            border: 1px solid #eee;
            border-bottom: none;
            text-align: center;
            &:last-child {
                border-bottom: 1px solid #eee;
            }
            &:nth-child(even) {
                background: #f9f9f9;
            }
        }
    }
    .del {
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