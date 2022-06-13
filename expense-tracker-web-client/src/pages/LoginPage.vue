<template>
    <v-container class="fill-height mb-6">
        <v-row align="center" justify="center" no-gutters style="height: 100%;">
            <div class="google-btn-wrapper">
                <div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline"
                    data-text="signin_with" data-size="large" data-locale="en" data-logo_alignment="left">
                </div>
            </div>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(() => {
    window['google'].accounts.id.initialize({
        client_id: '600278155883-j6ij6jgoqjs5s3r607c0f1591pi5omvg.apps.googleusercontent.com',
        callback: (response) => {
            store.dispatch('setGoogleToken', response.credential)
        }
    });
});
</script>