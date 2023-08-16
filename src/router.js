import Vue from 'vue'
import Router from 'vue-router'
import MyRoom from "@/components/MyRoom.vue";
Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/rooms',
            name: 'rooms',
            component: MyRoom,
            props: true
        }
    ]
})

export default router;