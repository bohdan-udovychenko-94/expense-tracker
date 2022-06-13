<template>
  <v-app>
    <v-main>
      <div v-if="userProfile">
        {{ userProfile.email }}
      </div>
      <login-page v-else />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import LoginPage from './pages/LoginPage.vue'

const store = useStore()
const userProfile = computed(() => store.getters.userProfile)

onMounted(() => {
  window['google'].accounts.id.initialize({
    client_id: '600278155883-j6ij6jgoqjs5s3r607c0f1591pi5omvg.apps.googleusercontent.com',
    callback: (response) => {
      store.dispatch('setGoogleToken', response.credential)
    }
  });
});
</script>