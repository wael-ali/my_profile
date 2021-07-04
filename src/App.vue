<template>
  <!-- <div id="app" class="w-screen min-h-screen flex flex-col items-center text-gray-400 md:flex-row bg-pink-700"> -->
  <div id="app" class="w-screen min-h-screen bg-teritary text-gray-400 home">
    <!-- <div class="w-full md:w-2/12 bg-gray-900 shadow-2xl flex flex-col items-center content-center md:min-h-screen md:fixed"> -->
    <div class="flex flex-col md:flex-row p-6 md:p-0">
      <div class="bg-gray-900 md:w-2/12 xl:w-1/12 md:fixed">
        <navigation />

      </div>
      <div class="min-h-screen w-full md:w-10/12 xl:w-11/12 ml-auto">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/app/Navigation.vue'
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="postcss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  @apply bg-green-50; */
}

.home {
  background-image: linear-gradient(to bottom, rgba(32, 34, 37, 0.88), rgba(32, 34, 37, 0.99)), url("./assets/bg_img1.jpg");
  background-size: cover;
}
/* width */
/* ::-webkit-scrollbar {
  width: .5em;
} */
/* Track */
/* ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.7);
} */
/* Handle */
/* ::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
} */
/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: red;
} */
</style>
