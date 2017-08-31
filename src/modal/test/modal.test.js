import Vue from 'vue'
import Modal from '../Modal.vue';

describe('Modal.vue',()=>{
    it('modal test',()=>{
        const Constructor=Vue.extend(Modal);
        const vm=new Constructor().$mount();
        expect(vm.$el.querySelector('.modal p').textContent).toEqual('');
    })
})

