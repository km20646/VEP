import Vue from 'vue'
import App from './App.vue'
import {
    store
} from './store/store.js'
import vuetify from './plugins/vuetify'
import router from './router/index.js'
import axios from 'axios'
import {
    initializeApp
} from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// firebase 세팅
const firebaseConfig = {
    apiKey: "AIzaSyCeqznyN3z_ncv69B34ZXxRf8EilKlZFuo",
    authDomain: "ec2-login-project.firebaseapp.com",
    projectId: "ec2-login-project",
    storageBucket: "ec2-login-project.appspot.com",
    messagingSenderId: "905069024414",
    appId: "1:905069024414:web:b5739de4c369e5ff32578f",
    measurementId: "G-LM4TXQ4LCT"
};
initializeApp(firebaseConfig);

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')