import Vue from 'vue'
import Router from 'vue-router'
import MyRoom from "@/components/MyRoom.vue";
import MyRestaurant from "@/components/MyRestaurant.vue";
import MyHome from "@/components/MyHome.vue";
import ConferenceHall from "@/components/ConferenceHall.vue";


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
        {
            path: '/hall',
            name: 'hall',
            component: ConferenceHall,
        }
    ]
})

export default router;