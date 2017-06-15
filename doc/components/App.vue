<template>
    <div class="app">
        <div class="nav-tab">
            <div class="tab-head">
                     <router-link to="/"><h2>vue ui components<span class="view-wap">...</span></h2></router-link>
                <ul>
                  <li><router-link to="/datepickerTab">datepicker</router-link></li>
                    <li><router-link to="/dialogTab">dialog</router-link></li>
                    <li><router-link to="/modalTab">modal</router-link></li>
                    <li><router-link to="/accordionTab">accordion</router-link></li>
                    <li><router-link to="/treeTab">tree</router-link></li>
                </ul>
            </div>
        </div>
        <div class="nav-content">
            <div class="content-box">
                <router-view></router-view>
            </div>
        </div>
    </div>
     
</template>
<style lang="scss">
    
.app {
    height: 100%;
}
@media (min-width: 768px) {
    .nav-tab {
        position: absolute;
        left: 0;
        top: 0;
        width: 260px;
        height: 100%;
        background: #f9f9f9;
        box-shadow: 0 0 0 2px #eee;
        .tab-head {
            height: 80px;
            line-height: 80px;
            text-align: center;
            background: #edf1f2;
            background: linear-gradient(to right, #939393 0%, #442020 100%);
            h2{
                color: #fff;
            }
        }
        ul {
            li {
                height: 40px;
                line-height: 40px;
                padding: 5px 0 5px 40px;
                text-align:left;
                &:hover {
                    background: #d8dbdc;
                    box-shadow: 0 0 0 2px #eee inset;
                }
            }
        }
        a {
            text-decoration: none;
            color: #333;
        }
    }

    .nav-content {
        width: 100%;
        height: 100%;
        .content-box {
            height: calc(100% - 80px);
            margin-left: 260px;
            padding-left: 30px;
            color: #333;
            padding-top: 80px;
            overflow: scroll;
        }
    }
}
@media (max-width: 768px) {
    .nav-tab {
        width: 100%;
        background: #f9f9f9;
        box-shadow: 0 0 0 2px #eee;
        .tab-head {
            position: relative;
            height: 80px;
            line-height: 80px;
            padding-left: 10px;
            background: #edf1f2;
            background: linear-gradient(to right, #939393 0%, #442020 100%);
            color: #333;
            h2{
                color: #fff;
            }
            .view-wap {
                float: right;
                padding: 0 20px;
            }
        }
        ul {
            display: none;
            width: 100px;
            position: absolute;
            right: 0;
            top: 80px;
            background: #edf1f2;
            li {
                height: 40px;
                line-height: 40px;
                padding: 5px 0;
                text-align: center;
                &:hover {
                    background: #d8dbdc;
                    box-shadow: 0 0 0 2px #eee inset;
                }
                a {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                }
            }
            &.list-show {
                display: block;
            }
        }
        a {
            text-decoration: none;
            color: #333;
        }
    }
    .nav-content {
        .content-box {
            padding: 30px 0 0 30px;
        }
    }
}
</style>