<template>
    <v-app id="app">
        <v-app-bar app dense color="indigo accent-2" dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item @click="() => {}">
                        <v-list-item-title @click="logout">
                            <v-icon>mdi-logout</v-icon>
                            로그아웃
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group v-model="selectedGroup" active-class="indigo--text text--accent-4">
                    <v-list-item v-for="(item, i) in group" :key="i" :to="item.path">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon">mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title v-text="item.text">Home</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
    import { mapState } from "vuex";
    import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
    export default {
        computed: { ...mapState["logined"] },
        methods: {
            logout() {
                const auth = getAuth();
                signOut(auth)
                    .then(() => {
                        // 로그아웃 완료
                        alert("로그아웃이 완료되었습니다");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
        },
        created: function () {
            console.log(this.$store.state.logined);
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    const uid = user.uid;
                    console.log(uid);
                    this.$store.state.logined = !this.$store.state.logined;
                    console.log(this.$store.state.logined);
                    this.$router.replace("home");
                    // ...
                } else {
                    // User is signed out
                    this.$router.replace("login");

                    // ...
                }
            });
        },
        data() {
            return {
                drawer: false,
                selectedGroup: null,
                title: "",
                opts: [
                    {
                        text: "로그아웃",
                        icon: "mdi-logout",
                    },
                ],
                group: [
                    {
                        icon: "mdi-login",
                        text: "Login",
                        title: "Finder",
                        path: "/login",
                    },
                    { icon: "mdi-home", text: "Home", path: "/home" },
                ],
            };
        },
        watch: {
            selectedGroup() {
                this.drawer = false;
            },
        },
    };
</script>

<style></style>
