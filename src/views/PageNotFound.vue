<template>
  <div class="w-full h-full flex place-items-center">
    <div class="mt-20 md:ml-20">
      <h1 class="mb-10 lg:text-7xl font-semibold leading-snug italic">
        <span class="text-8xl text-pink-700">404</span><br>
        <span class="border-b-4 border-pink-700 pb-3">Page Not Found!!</span>
      </h1>
      <p class="my-10 text-2xl font-semibold leading-snug italic">The link you clicked may be broken or the page may have been removed.</p>
      <p class="my-10 text-2xl font-semibold leading-snug italic text-green-600 cursor-pointer">
        <span @click="goHome">Return Home?!</span>
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'PageNotFound',
  components: {},
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="postcss">
</style>
