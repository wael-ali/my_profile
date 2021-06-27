<template>
  <div id="app" class="flex flex-row min-h-screen text-gray-400">
    <div id="nav" class="bg-gray-900 w-1/12 shadow-2xl flex flex-col items-center h-screen fixed">
      <div class="mt-10">
        <img src="./assets/my_github_imag.jpeg"
          alt="Wael Ali foto"
          class="w-24 h-24 rounded-full"
          @click="goToHomePage"
        >
      </div>
      <div class="flex flex-col items-center h-full justify-center">
        <router-link to="/" class="w-full text-center p-2 ">
          <font-awesome-icon icon="home" size="2x" title="Home"/>
        </router-link>
        <router-link to="/about" class="w-full text-center p-2">
          <font-awesome-icon icon="user" size="2x" title="About"/>
        </router-link>
        <router-link to="skills" class="w-full text-center p-2 ">
          <font-awesome-icon icon="id-card" size="2x" title="Skills"/>
        </router-link>
        <router-link to="/contact" class="w-full text-center p-2 ">
          <font-awesome-icon icon="envelope" size="2x" title="Contact Me"/>
        </router-link>
      </div>
      <div class="mb-10">
        <a href="#" class="w-full text-center p-2 ">
          <font-awesome-icon :icon="['fab', 'xing-square']" size="2x"/>
        </a>
        <a href="https://www.linkedin.com/in/wael-ali-b99a61162" class="w-full text-center p-2 ">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/>
        </a>
        <a to="#" class="w-full text-center p-2 ">
          <font-awesome-icon :icon="['fab', 'git-square']" size="2x"/>
        </a>
      </div>
    </div>
    <div class="w-11/12 ml-auto bg-teritary home">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToHomePage () {
      this.$router.push({ name: 'Home' })
    }
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
