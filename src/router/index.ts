import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import NewRegister from "../views/NewRegister.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/new-register/:dateRegister",
        name: "NewRegister",
        component: NewRegister,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;