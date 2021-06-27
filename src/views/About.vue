<template>
  <div class="h-full w-full flex flex-row items-center leading-tight">
    <div class="w-full pl-20">
      <div class="italic tracking-widest font-semibold">
        <h1 class="text-7xl mb-10">Myself & I</h1>
        <p class="mb-8 text-2xl">
          I’m a Fullstack Developer located in Germany (Hamburg).
        </p>
        <p class="mb-8 text-2xl">
          Well-organised person, problem solver, independent employee with high attention to detail. Fan of
          outdoor activities and action movies.
        </p>
        <p class="mb-8 text-2xl">
          Interested in the entire frontend/backend spectrums and willing to work on ambitious projects with positive people.
        </p>
        <p class="mb-8 text-xl">
          <span @click="goToContact" class="text-green-600 cursor-pointer">Let's make something special.</span>
        </p>
      </div>
    </div>

    <div class="w-full">
      <div class="flex flex-row w-full">
        <div class="w-full flex flex-col items-center">
          <img src="../assets/bootstrap2_logo.svg" alt="Bootstrap logo" srcset="" class="mb-2 w-24 h-24">
          <img src="../assets/nodejs_logo.svg" alt="Nodejs logo" srcset="" class="mb-2 w-24 h-24">
          <img src="../assets/react_logo.svg" alt="React js logo" srcset="" class="mb-2 w-24 h-24">
          <img src="../assets/mysql_logo.svg" alt="" srcset="" class="mb-2 w-24 h-24">
          <img src="../assets/ts_node_logo.svg" alt="" srcset="" class="mb-2 w-24 h-24">
          <img src="../assets/mongodb_logo.svg" alt="" srcset="" class="mb-2 w-24 h-24">
          <img src="../assets/rails2_logo.png" alt="" srcset="" class="mb-2 w-24 h-24">
          <img src="../assets/docker_logo.svg" alt="" srcset="" class="mb-2 w-24 h-24">
        </div>
        <div class="w-full flex flex-col items-center">
          <img src="../assets/tailwind_logo.svg" alt="" srcset="" class="mb-2 w-24 h-24">
          <img src="../assets/php2_logo.svg" alt="" srcset="" class="mb-2 w-24 h-24">
          <img src="../assets/vue_logo.svg" alt="" srcset="" class="mb-2 w-24 h-24">
          <img src="../assets/js_logo.svg" alt="" srcset="" class="mb-2 w-24 h-24">
          <img src="../assets/css3_logo.svg" alt="" srcset="" class="mb-2 w-24 h-24">
          <img src="../assets/html5_logo.svg" alt="" srcset="" class="mb-2 w-24 h-24">
          <img src="../assets/symfony_05.svg" alt="" srcset="" class="mb-2 w-24 h-24">
          <img src="../assets/git_logo.svg" alt="" srcset="" class="mb-2 w-24 h-24">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    goToContact () {
      this.$router.push({ name: 'contact' })
    }
  }
}
</script>
