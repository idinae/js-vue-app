import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
    {path: "/", component: Home},
    {path: "/register", component: Register},
    {path: "/login", component: Login},
    {path: "/logout", component: Home},
];

const router = createRouter({
    history: createWebHistory(),
    routes, //short for `routes: routes`
});

export default router;