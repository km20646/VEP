<template>
    <v-container fill-height>
        <v-row justify="center">
            <v-col cols="12" align="center">
                <v-card class="pa-4" max-width="500">
                    <v-card-text>
                        <v-text-field prepend-icon="mdi-account-outline" v-model="id" label="아이디" required></v-text-field>
                        <v-text-field prepend-icon="mdi-form-textbox-password" @click:append="show1 = !show1" :type="show1 ? 'text' : 'password'" counter :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" v-model="pw" label="비밀번호" required hint="8자 이상 입력"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn depressed large color="indigo accent-2 white--text" block rounded class="mx-auto font-weight-bold body-1"> 로그인 </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                id: "",
                show1: false,
                pw: "",
                rules: {
                    required: (value) => !!value || "Required.",
                    min: (v) => v.length >= 8 || "Min 8 characters",
                    emailMatch: () => `The email and password you entered don't match`,
                },
            };
        },
    };
</script>

<style></style>
