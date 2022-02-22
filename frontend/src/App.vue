<template>
    <v-app id="app">
        <v-app-bar app dense color="deep-purple" dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title></v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group v-model="selectedGroup" active-class="deep-purple--text text--accent-4">
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
    export default {
        data() {
            return {
                drawer: false,
                selectedGroup: null,
                title: "",
                group: [
                    {
                        icon: "mdi-home",
                        text: "Home!",
                        title: "Finder",
                        path: "/",
                    },
                    { icon: "mdi-account", text: "Account", path: "/account" },
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
