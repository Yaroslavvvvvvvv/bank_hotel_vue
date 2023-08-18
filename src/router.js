import Vue from 'vue'
import Router from 'vue-router'
import MyRoom from "@/components/MyRoom.vue";
import MyRestaurant from "@/components/MyRestaurant.vue";
import MyHome from "@/components/MyHome.vue";


Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/rooms',
            name: 'rooms',
            component: MyRoom,
        },
        {
            path: '/restaurant',
            name: 'restaurant',
            component: MyRestaurant,
        },
        {
            path: '/',
            name: 'home',
            component: MyHome,
        },
    ]
})

export default router;