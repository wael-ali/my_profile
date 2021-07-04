<template>
  <div class="w-full min-h-screen flex justify-center items-center">
    <div class="w-full ml-10 md:ml-20">
      <div>
        <h1 class="mb-10 text-3xl md:text-7xl font-semibold leading-tight italic">
          Hi, <br/>
          I'm Wael Ali, <br/>
          web developer
        </h1>
        <p class="mb-20 tracking-widest font-semibold">Fullstack Developer / Back End Developer</p>
        <p>
          <span
          class="contact_me_btn border-2 border-green-600 text-green-600 tracking-widest font-semibold rounded cursor-pointer py-3 px-12 md:px-20"
          @click="goToContactPage"
          >Contact me!</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  methods: {
    goToContactPage () {
      this.$router.push({ name: 'contact' })
    }
  }
}
</script>

<style lang="postcss" scoped>
  .contact_me_btn {
    position: relative;
  }
  .contact_me_btn:hover:after {
    display: inline;
    content: 'Contact me !';
    @apply bg-green-600 w-full;
  }
  .contact_me_btn:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0%;
    @apply bg-green-600 w-0 h-full text-teritary text-center py-2;
    transition: width 0.4s;
  }
</style>
