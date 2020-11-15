import Vue from 'vue';
import http from 'axios';

//设置基准url
http.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/';

// 添加请求拦截器
http.interceptors.request.use(config => {
    config.headers.Authorization = window.sessionStorage.getItem('token');
    return config;
});

Vue.prototype.$http = http;

