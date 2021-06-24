<template>
  <div class="flex flex-col items-center">
    <h1 class="text-5xl">Welcome</h1>
    <div class="flex flex-col items-center bg-gray-100 w-1/3 p-10 rounded-lg shadow-2xl">
      <img src="https://source.unsplash.com/random" alt="Random image" srcset="" class="w-64 h-64 rounded-full">
      <h5 class="text-2xl font-semibold mt-5">Some Image information</h5>
      <p class="text-center mt-5"><span class="text-purple-900 font-semibold">Lorem ipsum </span> dolor sit amet, consectetur adipisicing elit. Deleniti, ab? Necessitatibus pariatur corrupti quas architecto tempore temporibus quae facere beatae.</p>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" class="max-auto">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
