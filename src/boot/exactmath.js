import Vue from 'vue'
import exactMath from 'exact-math';

Object.defineProperty(Vue.prototype, '$exactMath', { value: exactMath });
