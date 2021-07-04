<template>
  <div id="app" class="flex flex-col items-center text-gray-400 md:flex-row md:min-h-screen">
    <div id="nav" class="bg-gray-900 w-full md:w-2/12 shadow-2xl flex flex-col items-center content-center md:h-screen md:fixed">
      <div class="mt-5 w-full flex flex-row justify-between items-center md:mt-10 md:flex-col">
        <div class="ml-4 md:mx-auto">
          <img src="./assets/my_github_imag.jpeg"
            alt="Wael Ali foto"
            class="w-16 h-16 sm:w-14 sm:h-12 md:w-24 md:h-24 rounded-full"
            @click="goToHomePage"
          >
        </div>
        <div class="mr-4 md:mx-auto">
          <div v-if="!navIsOpen">
            <span @click="toggleNav" class="text-3xl">
              <font-awesome-icon icon="bars" title="Home"/>
            </span>
          </div>
          <div v-if="navIsOpen">
            <span @click="toggleNav" class="text-3xl">
              <font-awesome-icon icon="times" title="Home"/>
            </span>
          </div>
        </div>
      </div>
     <div v-if="navIsOpen"
     class="flex flex-col items-center md:h-full justify-center"
     >
       <router-link to="/" class="w-full text-center p-2 text-3xl">
         <font-awesome-icon icon="home" title="Home"/>
       </router-link>
       <router-link to="/about" class="w-full text-center p-2 text-3xl">
         <font-awesome-icon icon="user" title="About"/>
       </router-link>
       <router-link to="skills" class="w-full text-center p-2 text-3xl">
         <font-awesome-icon icon="id-card" title="Skills"/>
       </router-link>
       <router-link to="/contact" class="w-full text-center p-2 text-3xl">
         <font-awesome-icon icon="envelope" title="Contact Me"/>
       </router-link>
     </div>
     <div class="md:mb-10 mt-auto">
       <a href="#" class="w-full text-center p-2 text-3xl">
         <font-awesome-icon :icon="['fab', 'xing-square']" />
       </a>
       <a href="https://www.linkedin.com/in/wael-ali-b99a61162" class="w-full text-center p-2 text-3xl">
         <font-awesome-icon :icon="['fab', 'linkedin']"/>
       </a>
       <a to="#" class="w-full text-center p-2 text-3xl">
         <font-awesome-icon :icon="['fab', 'git-square']"/>
       </a>
     </div>
    </div>
    <div class="min-h-screen w-full bg-teritary md:w-10/12 md:ml-auto home">
     <!-- <router-view/> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      navIsOpen: false
    }
  },
  methods: {
    goToHomePage () {
      this.$router.push({ name: 'Home' })
    },
    toggleNav () {
      this.navIsOpen = !this.navIsOpen
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
