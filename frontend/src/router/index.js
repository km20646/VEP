import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/page/Home";
import Account from "@/components/page/Account";
import Login from "@/components/page/Login";
import Signup from "@/components/page/Signup";
Vue.use(Router);
const routes = [{
    path: "/home",
    name: "Home",
    component: Home
}, {
    path: "/login",
    name: "Login",
    component: Login
}, {
    path: "/signup",
    name: "Signup",
    component: Signup
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