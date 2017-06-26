<template>
    <div>
      <h1>welcome!</h1>
      <ul class="link-list">
          <li>
              <router-link to="/datepickerTab">Go datepicker</router-link>
          </li>
          <li>
              <router-link to="/dialogTab">Go dialog</router-link>
          </li>
          <li>
               <router-link to="/modalTab">Go modal</router-link>
          </li>
          <li>
              <router-link to="/accordionTab">Go accordion</router-link>
          </li>
          <li>
              <router-link to="/treeTab">Go tree</router-link>
          </li>
      </ul>
     <router-view></router-view>
    </div>
     
</template>
<style lang="scss">


    .link-list{
        margin-top: 20px;
        li{
            line-height: 30px;
        }
    }
</style>