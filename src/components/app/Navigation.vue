<template>
  <div id="nav">
    <div class="h-full flex flex-col md:h-screen">
      <div>
        <div class="my-5 w-full flex flex-row justify-between items-center md:mt-10 md:flex-col">
          <div class="ml-4 md:mx-auto">
            <img src="@/assets/my_github_imag.jpeg"
                 alt="Wael Ali foto"
                 class="w-16 h-16 sm:w-14 sm:h-12 md:w-24 md:h-24 rounded-full"
                 @click="goToHomePage"
            >
          </div>
          <!-- Bars Icons -->
          <div class="mr-4 md:mx-auto md:mt-10">
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
      </div>
      <div class="md:h-full">
        <!-- Main Nav -->
        <div v-if="navIsOpen"
             class="flex flex-col items-center justify-center"
        >
          <router-link to="/" class="text-center p-2 text-3xl">
            <font-awesome-icon icon="home" title="Home"/>
          </router-link>
          <router-link to="/about" class="text-center p-2 text-3xl">
            <font-awesome-icon icon="user" title="About"/>
          </router-link>
          <router-link to="skills" class="text-center p-2 text-3xl">
            <font-awesome-icon icon="id-card" title="Skills"/>
          </router-link>
          <router-link to="/contact" class="text-center p-2 text-3xl">
            <font-awesome-icon icon="envelope" title="Contact Me"/>
          </router-link>
        </div>
      </div>
      <div class="mt-auto">
        <!-- Social Nav -->
        <div class="md:mb-10 flex justify-center">
          <a href="#" class="text-center p-2 text-3xl">
            <font-awesome-icon :icon="['fab', 'xing-square']" />
          </a>
          <a href="https://www.linkedin.com/in/wael-ali-b99a61162" class="text-center p-2 text-3xl">
            <font-awesome-icon :icon="['fab', 'linkedin']"/>
          </a>
          <a to="#" class="text-center p-2 text-3xl">
            <font-awesome-icon :icon="['fab', 'git-square']"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
