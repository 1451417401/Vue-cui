import Vue from 'vue';
import VueRouter from 'vue-router';
import './assets/css/index.scss';
import App from './components/App';
import Home from './components/Home';
import DatepickerTab from './components/DatepickerTab';
import DialogTab from './components/DialogTab';
import ModalTab from './components/ModalTab';
import Ing from './components/Ing';
debugger;
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/datepickerTab', component: DatepickerTab },
    { path: '/dialogTab', component: DialogTab },
    { path: '/modalTab', component: ModalTab },
    { path: '/*', component: Ing }
]

const router = new VueRouter({
        routes
    })
    // const app = new Vue({
    //     router
    // }).$mount('#app');

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
