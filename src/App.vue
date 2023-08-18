<template>
  <LandingPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LandingPage from '@/views/LandingPage.vue'

export default defineComponent({
  name: 'App',
  components: {
    LandingPage
  }
})

</script>

<style>
#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
