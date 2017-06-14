<template>
     <div class="d-container">
        <div class="p-input" v-on:click="show()">{{dateString}}</div>
        <div class="p-content" v-show="showFlag">
            <div>
                <span class="year-op" v-on:click="yearLeft()">&lt;&lt;</span>
                <span class="month-op" id="month-left" v-on:click="monthLeft()">&lt;</span>
                <span>{{year}}</span>年
                <span>{{month}}</span>月
                <span class="month-op" v-on:click="monthRight()">&gt;</span>
                <span class="year-op" v-on:click="yearRight()">&gt;&gt;</span>
            </div>
            <div>
                <table class="c-weeek">
                    <thead>
                        <tr>
                            <td>日</td>
                            <td>一</td>
                            <td>二</td>
                            <td>三</td>
                            <td>四</td>
                            <td>五</td>
                            <td>六</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="rows in dataToShow">
                            <td v-for="item in rows" v-on:click="dateSelect(item)" v-bind:class="{ 'current-day': item==date,'item-day': item!=''}" >{{item}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
     export default {
        data(){
            return {
               year: new Date().getFullYear(),
               month: new Date().getMonth() + 1,
               date:  new Date().getDate(),
               dataToShow: [],
               showFlag: false,
               dateString: ''
            }
        },
        props:{
            dateStr:{
                type: String
            }
        },
        // computed:{
        //     dateString(){
        //         return this.dateToShow?this.dateToShow:'';
        //     }
        // },
        beforeCreate(){
            console.dir('beforecreate');
        },
        created(){
            console.dir('created');
        },
        beforeMount(){
            console.dir('beforemount');
        },
        mounted(){
            this.dateString=this.dateStr || '';
            this.init();
            console.dir('mounted');
        },
        beforeUpdate(){
            console.dir('befroeupdate');
        },
        updated(){
            console.dir('updated');
        },
        beforeDestory(){
            console.dir('beforedestory');
        },
        destoryed(){
            console.dir('destoryed');
        },
        methods: {
            init(){
                this.dataToShow=[];

                var daysInMonth = new Date(this.year, this.month, 0).getDate(); //莫个月的天数
                var firstDayOfMonth = new Date(this.year, this.month - 1, 1).getDay(); //莫个月第一天是星期几

                var firstRow=[];
                for (var i = 0; i < firstDayOfMonth; i++) {
                    firstRow[i] = "";
                }
                for (var i = firstDayOfMonth, j = 1; i < 7; i++) {
                    firstRow[i] = j++;
                }
                this.dataToShow.push(firstRow);

                var rows = Math.ceil((daysInMonth) / 7);
                for(var i=0;i<rows;i++){
                    var temp=[];
                    for(var j=0;j<7;j++){
                        var item = i * 7 + j + (7 - firstDayOfMonth) + 1;
                        if(item<=daysInMonth){
                            temp[j]=item;
                        }else{
                             temp[j]='';
                        }
                       
                    }
                    this.dataToShow.push(temp);

                }
            },
            show(){
                this.year=new Date().getFullYear(),
                this.month= new Date().getMonth() + 1,
                this.date=new Date().getDate(),
                this.showFlag=!this.showFlag;
                if(this.showFlag){
                    this.init(this.year, this.month, this.date);
                }
            },
            yearLeft(){
                 this.init(this.year = this.year - 1, this.month, this.date);
            },
            yearRight(){
                 this.init(this.year = this.year + 1, this.month, this.date);
            },
            monthLeft(){
                this.init(this.year, this.month = this.month - 1, this.date);
            },
            monthRight(){
                this.init(this.year, this.month = this.month + 1, this.date);
            },
            dateSelect(date){
                if(date){
                    this.date=date;
                    this.showFlag=false;
                    this.dateString=[this.year,this.month,this.date].join('-');
                }
            }


        },
        components: {
          
        }
    }
</script>
<style lang="scss">
    .d-container{
        position: relative;
    }
    
    .p-input{
        width: 120px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        color: #55595c;
        border: 1px solid rgba(0, 0, 0, .15);
        border-radius: .25rem;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        cursor: auto;
    }
    
    .p-content{
        position: absolute;
        left: 0;
        top: 32px;
        width: 200px;
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, .15);
        box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
        border-radius: 5px;
        background: #fff;
    }

     .year-op{
        padding: 0 3px;
        cursor: pointer;
    }
    
    .month-op{
        padding: 0 3px;
        cursor: pointer;
    }
    
    td{
        width: 22px;
        height: 22px;
        text-align: center;
    }
    
    td.item-day{
        color: #666;
        background: #f5f5f5;
        border-radius: .2rem;
        border: 1px solid transparent;
        margin: 1px;
    }
    
    td.current-day{
        color: #fff;
        border-color: #0275d8;
        background-color: #0275d8;
    }
    
    tbody .item-day:hover{
        background: #57a7ec;
        color: #fff;
        cursor: pointer;
    }

</style>