<template>
    <div class="app">
        <div class="nav-tab">
            <div class="tab-head">
                <h2>
                     <router-link to="/">vue ui components</router-link>
                </h2>
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
        color: #333;
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
        ;
        margin-left: 260px;
        padding-left: 30px;
        color: #333;
        padding-top: 80px;
        overflow: scroll;
    }
}
</style>