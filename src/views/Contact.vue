<template>
  <div class="w-full h-full flex items-center">
    <div class="ml-20 w-full">
      <h2 class="mb-10 text-7xl font-semibold leading-tight text-green-600 italic">
        Contact Me
      </h2>
      <p class="tracking-widest font-semibold italic">
        I’m open for new opportunities – especially ambitious or large projects.
        However, if you have other request or question, don’t hesitate to use the form.
      </p>
    </div>
    <div class="w-full">
      <div class="w-3/4 mx-auto">
        <div class="w-full flex mb-2">
          <div class="w-full mr-1">
            <input type="text"
            class="w-full border-none rounded p-3 bg-gray-900 outline-none focus:outline-none text-green-700 placeholder-secondary tracking-widest font-semibold"
            placeholder="Name">
          </div>
          <div class="w-full ml-1">
            <input type="text"
            class="w-full border-none rounded p-3 bg-gray-900 outline-none focus:outline-none text-green-700 placeholder-secondary tracking-widest font-semibold"
            placeholder="Email">
          </div>
        </div>
        <div class="w-full mb-2">
          <input type="text"
          class="w-full border-none rounded p-3 bg-gray-900 outline-none focus:outline-none text-green-700 placeholder-secondary tracking-widest font-semibold"
          placeholder="Subject">
        </div>
        <div class="w-full mb-10">
          <textarea rows="5"
          class="w-full border-none rounded p-3 bg-gray-900 outline-none focus:outline-none text-green-700 placeholder-secondary tracking-widest font-semibold"
          placeholder="Messge" />
        </div>
        <div class="w-full text-right">
          <span
          class="contact_me_btn py-3 px-20 border-2 border-green-600 text-green-600 tracking-widest font-semibold rounded cursor-pointer"
          @click="sendMessage"
          >Contact me!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Contact',
  methods: {
    sendMessage () {
      alert('Sorry, Not Implemented yet!!, please use Linkedin')
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
    content: 'Send Message';
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
