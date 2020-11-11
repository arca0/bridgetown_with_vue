import "../styles/index.scss"
import Vue from 'vue'
import Hello from '../components/Hello.vue'

new Vue({
    el: '#hello',
    template: '<Hello/>',
    components: { Hello }
})
