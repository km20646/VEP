<template>
    <v-container>
        <h1>영화</h1>
        <li v-for="movie in movies" :key="movie.userid" class="item">
            <h4>{{ movie.userid }}</h4>
            <span>{{ movie.age }}</span>
            <span>입니다.</span>
        </li>
    </v-container>
</template>

<script>
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
        },
        data() {
            return {
                movies: [],
            };
        },
    };
</script>

<style></style>
