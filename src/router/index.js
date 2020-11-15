import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/login'
        }
        ,
        {
            path: '/login',
            component: () => import('$views/Login.vue')
        },
        {
            path: '/home',
            component: () => import('$views/Home.vue')
        }
    ]
})


//全局前置守卫，页面跳转前进行鉴权
router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next();
    const token = store.state.token;
    if (!token) return next('/login');
    next();
})

export default router
