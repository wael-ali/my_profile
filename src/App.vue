<template>
  <div id="app" class="flex flex-row min-h-screen text-gray-400">
    <div id="nav" class="bg-secondary w-1/12 shadow-2xl flex flex-col items-center h-screen fixed">
      <img src="./assets/my_github_imag.jpeg" alt="Random image" srcset="" class="w-24 h-24 rounded-full">
      <div class="flex flex-col items-center h-full justify-center">
        <router-link to="/about" class="w-full text-center p-2">About</router-link>
        <router-link to="/" class="w-full text-center p-2 ">Home</router-link>
      </div>
    </div>
    <div class="w-11/12 ml-auto bg-primary">
      <router-view/>
    </div>
  </div>
</template>

<style lang="postcss">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @apply bg-green-50;
} */

#nav {
  /* padding: 30px; */
}

#nav a {
  font-weight: bold;
  /* color: #2c3e50; */
  /* color: ; */
}

#nav a.router-link-exact-active {
  color: #42b983;
  @apply bg-teritary border-b border-red-500 rounded;
}
</style>
