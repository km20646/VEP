import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/page/Home";
import Account from "@/components/page/Account";
Vue.use(Router);
const routes = [{
    path: "/",
    name: "Home",
    component: Home
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