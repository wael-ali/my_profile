<template>
  <!-- <div class="min-h-screen w-full flex flex-col md:flex-row items-center leading-tight"> -->
  <div class="w-full flex flex-col md:flex-row items-center leading-tight">
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:pl-20">
        <div class="italic tracking-widest font-semibold lg:p-10">
          <h1 class="text-3xl mt-6 md:text-4xl lg:text-7xl mb-10">Myself & I</h1>
          <p class="mb-8 md:text-xl">
            I’m a Fullstack Developer located in Germany (Hamburg).
          </p>
          <p class="mb-8 md:text-xl">
            Well-organised person, problem solver, independent employee with high attention to detail. Fan of
            outdoor activities and action movies.
          </p>
          <p class="mb-8 md:text-xl">
            Interested in the entire frontend/backend spectrums and willing to work on ambitious projects with positive people.
          </p>
          <p class="mb-8 text-xl">
            <span @click="goToContact" class="text-green-600 cursor-pointer">Let's make something special.</span>
          </p>
        </div>
      </div>
      <div class="w-full p-10">
        <div class="flex flex-row w-full">
          <div class="w-full flex flex-col items-center">
            <img src="../assets/bootstrap2_logo.svg" alt="Bootstrap logo" srcset="" class="mb-2 w-16 h-16 md:w-20 md:h-20">
            <img src="../assets/nodejs_logo.svg" alt="Nodejs logo" srcset="" class="mb-2 w-16 h-16 md:w-20 md:h-20">
            <img src="../assets/react_logo.svg" alt="React js logo" srcset="" class="mb-2 w-16 h-16 md:w-20 md:h-20">
            <img src="../assets/mysql_logo.svg" alt="" srcset="" class="mb-2 w-16 h-16 md:w-20 md:h-20">
            <img src="../assets/ts_node_logo.svg" alt="" srcset="" class="mb-2 w-16 h-16 md:w-20 md:h-20">
            <img src="../assets/mongodb_logo.svg" alt="" srcset="" class="mb-2 w-16 h-16 md:w-20 md:h-20">
            <img src="../assets/rails2_logo.png" alt="" srcset="" class="mb-2 w-16 h-16 md:w-20 md:h-20">
            <img src="../assets/docker_logo.svg" alt="" srcset="" class="mb-2 w-16 h-16 md:w-20 md:h-20">
          </div>
          <div class="w-full flex flex-col items-center">
            <img src="../assets/tailwind_logo.svg" alt="" srcset="" class="mb-2 w-16 h-16 md:w-20 md:h-20">
            <img src="../assets/php2_logo.svg" alt="" srcset="" class="mb-2 w-16 h-16 md:w-20 md:h-20">
            <img src="../assets/vue_logo.svg" alt="" srcset="" class="mb-2 w-16 h-16 md:w-20 md:h-20">
            <img src="../assets/js_logo.svg" alt="" srcset="" class="mb-2 w-16 h-16 md:w-20 md:h-20">
            <img src="../assets/css3_logo.svg" alt="" srcset="" class="mb-2 w-16 h-16 md:w-20 md:h-20">
            <img src="../assets/html5_logo.svg" alt="" srcset="" class="mb-2 w-16 h-16 md:w-20 md:h-20">
            <img src="../assets/symfony_05.svg" alt="" srcset="" class="mb-2 w-16 h-16 md:w-20 md:h-20">
            <img src="../assets/git_logo.svg" alt="" srcset="" class="mb-2 w-16 h-16 md:w-20 md:h-20">
          </div>
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
