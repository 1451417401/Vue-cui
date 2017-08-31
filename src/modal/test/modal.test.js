import Vue from 'vue'
import Modal from '../Modal.vue';

describe('Modal test',()=>{
    it('modal tip ',()=>{
        const Constructor=Vue.extend(Modal);
        const vm=new Constructor({
            propsData:{
                tip: 'Hello World',
                active: true
            }
            
        }).$mount();
        expect(vm.$el.querySelector('.modal p').textContent).toEqual('Hello World');
    })
})

