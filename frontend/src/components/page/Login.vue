<template>
    <v-container fill-height>
        <v-row justify="center">
            <v-col cols="12" align="center">
                <v-card class="pa-4 rounded-lg" max-width="500" elevation="0" outlined>
                    <v-card-title class="font-weight-bold">로그인</v-card-title>
                    <v-card-text>
                        <v-text-field prepend-icon="mdi-account-outline" v-model="email" label="아이디" required></v-text-field>
                        <v-text-field prepend-icon="mdi-form-textbox-password" @click:append="show1 = !show1" :type="show1 ? 'text' : 'password'" counter :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" v-model="pw" label="비밀번호" required hint="8자 이상 입력"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn depressed large color="indigo accent-2 white--text" @click="login" block rounded class="mx-auto font-weight-bold body-1"> 로그인 </v-btn>
                    </v-card-actions>
                    <div class="grey--text accent-3 font-weight-bold mt-2 body-2">계정 없으면 <router-link to="/signup">회원가입</router-link>하기</div>
                    <v-card-actions class="mt-12">
                        <v-btn depressed rounded large @click="google" color="red accent-2 white--text" block class="mx-auto font-weight-bold body-1">
                            <v-icon class="mr-2">mdi-google</v-icon>
                            로그인
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
    export default {
        created: function () {},
        data() {
            return {
                email: "",
                show1: false,
                pw: "",
                rules: {
                    required: (value) => !!value || "Required.",
                    min: (v) => v.length >= 8 || "Min 8 characters",
                    emailMatch: () => `The email and password you entered don't match`,
                },
            };
        },
        methods: {
            google() {
                const provider = new GoogleAuthProvider();
                const auth = getAuth();
                auth.languageCode = "Korean";
                signInWithPopup(auth, provider)
                    .then((result) => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        // const credential = GoogleAuthProvider.credentialFromResult(result);
                        // const token = credential.accessToken;

                        // The signed-in user info.
                        const user = result.user;
                        alert(user.displayName + "님 환영합니다~!");
                        // ...
                    })
                    .catch((error) => {
                        console.log(error);
                        // ...
                    });
            },
            login() {
                const auth = getAuth();
                signInWithEmailAndPassword(auth, this.email, this.pw).then(
                    function () {
                        alert("로그인 완료!");
                        if (this.$route.path !== "/home") this.$routes.push("/home");
                    },
                    function (err) {
                        alert("에러 : " + err.message);
                    }
                );
            },
        },
    };
</script>

<style></style>
