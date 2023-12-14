import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login/Login.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
]

const router = createRouter({
    history: createWebHistory(),
    routes, //short for `routes: routes`
});

export default router;