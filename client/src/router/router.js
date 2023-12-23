import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";

const routes = [
    {path: "/", component: Home},
    {path: "/register", component: Register},
    {path: "/login", component: Login},
    {path: "/logout", component: Home},
    {path: "/profile", 
    component: Profile,
    meta: {requiresAuth: true}
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes, //short for `routes: routes`
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some((record) => record.meta.requiresAuth)) {
//         if(getAuth().currentUser) {
//             next();
//         } else {
//             alert("you dont have access!");
//             next("/");
//         }
//     }
// });

export default router;