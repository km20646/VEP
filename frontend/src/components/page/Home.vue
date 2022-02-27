<template>
    <v-container>
        <h1>{{ this.email }}님 환영합니다</h1>
        <li v-for="movie in movies" :key="movie.userid" class="item">
            <h4>{{ movie.userid }}</h4>
            <span>{{ movie.age }}</span>
        </li>
    </v-container>
</template>

<script>
    import { getAuth, onAuthStateChanged } from "firebase/auth";
    export default {
        created() {
            this.$axios
                .get("/api/movies")
                .then((res) => {
                    this.movies = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log(user);
                    this.email = user.email;
                } else {
                    this.$router.push("/login");
                }
            });
        },
        data() {
            return {
                movies: [],
                email: "",
            };
        },
    };
</script>

<style></style>
