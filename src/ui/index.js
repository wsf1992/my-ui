import Vue from 'vue'
import Button from './packages/button/button.vue'
import Radio from './packages/radio/radio.vue'

const Components = [Button,Radio]

Components.forEach(ele => {
    Vue.component(ele.name, ele)
})