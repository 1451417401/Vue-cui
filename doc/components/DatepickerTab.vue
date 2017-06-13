<template>
    <div>
        <a class="view-src" href="https://github.com/1451417401/Vue-cui/tree/master/src/datepicker">view src---datepicker</a>
        <datepicker v-bind:dateStr="dateStr"></datepicker>
    </div>
</template>
<script type="text/javascript">
import Datepicker from '../../src/datepicker/Datepicker';
    export default{
            data(){
                return{
                    dateStr: '2017-6-10'
                }
            },
            components:{
                Datepicker
            }
    }
</script>