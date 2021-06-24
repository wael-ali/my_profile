<template>
  <div id="app" class="bg-gray-900 flex w-full min-h-screen text-gray-400">
    <div id="nav" class="bg-gray-800 w-1/12 shadow-2xl flex flex-col items-center justify-center">
      <router-link to="/" class="bg-gray-700 w-full text-center p-2 border-b border-red-500">Home</router-link>
      <router-link to="/about" class="bg-gray-700 w-full text-center p-2 border-b border-red-500">About</router-link>
    </div>
    <div class="w-11/12">
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
