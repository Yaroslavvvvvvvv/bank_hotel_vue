import Vue from 'vue'
import Router from 'vue-router'
import MyRoom from "@/components/MyRoom.vue";
import MyRestaurant from "@/components/MyRestaurant.vue";

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/rooms',
            name: 'rooms',
            component: MyRoom,
            props: true
        },
        {
            path: '/restaurant',
            name: 'restaurant',
            component: MyRestaurant,
            props: true
        }
    ]
})

export default router;