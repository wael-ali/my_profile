<template>
  <div class="w-full h-full flex flex-row items-center">
    <div class="w-full pl-20">
      <h1 class="mb-10 text-7xl font-semibold leading-tight italic">
        Skills &<br>
        experience
      </h1>
      <!-- <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui cum sint quasi suscipit aliquam dolor commodi nisi rerum a ex repellendus tempore, dolore eum dicta ducimus quia? Quo, dolore incidunt! Omnis sint labore, aperiam est fugit explicabo eligendi aut atque, tenetur dolor unde magnam hic cum neque illo accusamus nemo!</p> -->
    </div>
    <div class="w-full h-3/4">
      <div class="p-20 w-full h-full">
        <div class="h-1/6 flex flex-row text-center items-center nav font-semibold tracking-widest italic bg-gray-900 rounded">
          <div class="w-full p-4">
            <router-link to="/skills/backend" class="w-full text-center p-2 cursor-pointer">
              Back-End
            </router-link>
          </div>
          <div class="w-full p-4">
            <router-link to="/skills/frontend" class="w-full text-center p-2 cursor-pointer">
              Front-End
            </router-link>
          </div>
          <div class="w-full p-4">
            <router-link to="/skills/other" class="w-full text-center p-2 cursor-pointer">
              Other
            </router-link>
          </div>
        </div>
        <div class="h-5/6 overflow-auto border-l-4 border-gray-900">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Skills',
  components: {}
}
</script>

<style lang="postcss">
.nav a.router-link-exact-active {
  color: #42b983;
  @apply bg-teritary border-b border-red-500 rounded;
}
</style>
