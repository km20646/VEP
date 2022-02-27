<template>
    <v-container fill-height>
        <v-row justify="center">
            <v-col cols="12" align="center">
                <v-card class="pa-4 rounded-lg" max-width="500" elevation="0" outlined>
                    <v-card-title class="font-weight-bold">회원가입</v-card-title>
                    <v-card-text>
                        <v-text-field prepend-icon="mdi-account-outline" v-model="email" label="아이디" required></v-text-field>
                        <v-text-field prepend-icon="mdi-form-textbox-password" @click:append="show1 = !show1" :type="show1 ? 'text' : 'password'" counter :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" v-model="pw" label="비밀번호" required hint="8자 이상 입력"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn depressed large color="teal lighten-2 white--text" @click="signUp" block rounded class="mx-auto font-weight-bold body-1"> 가입하기 </v-btn>
                    </v-card-actions>
                    <div class="grey--text accent-3 font-weight-bold mt-2 body-2">또는 <router-link to="/">로그인</router-link>으로 돌아가기</div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    export default {
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
            signUp() {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.email, this.pw).then(
                    function (user) {
                        alert("회원가입 완료!", user);
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
