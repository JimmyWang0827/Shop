import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '$assets/css/global.css';
import './plugins/element';
import '$assets/icon/iconfont.css';
import store from './store';
import './axios';

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
