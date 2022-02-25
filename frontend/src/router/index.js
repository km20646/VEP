import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/page/Home";
import Account from "@/components/page/Account";
import Login from "@/components/page/Login";
Vue.use(Router);
const routes = [{
    path: "/home",
    name: "Home",
    component: Home
}, {
    path: "/",
    name: "Login",
    component: Login
}, {
    path: "/account",
    name: "Account",
    component: Account
}];

const router = new Router({
    mode: "history",
    routes
});
export default router;