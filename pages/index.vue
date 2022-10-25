<template>
  <div
    class="bg-gray-200 flex flex-col items-center sm:p-16"
    style="width: 100vw; height: auto"
  >
    <div class="paper">
      <cv-header :contents="frontEnd" />
      <div class="sm:flex sm:flex-row sm:p-0 p-6">
        <div class="sm:flex-1 sm:p-6">
          <cv-contact class="sm:hidden" :contents="frontEnd" />
          <cv-skills class="sm:hidden" :contents="frontEnd" />
          <cv-profile :contents="frontEnd" />
          <cv-experience :contents="frontEnd" />
          <cv-education :contents="frontEnd" />
        </div>
        <div class="hidden sm:w-1/3 sm:bg-gray-100 sm:pl-4 sm:pr-4 sm:p-6 sm:block">
          <cv-contact :contents="frontEnd" />
          <cv-skills class="order-2" :contents="frontEnd" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const frontEnd = await $content('front-end-contents').fetch()
    return { frontEnd }
  },

  data() {
    return {}
  },

  mounted() {},

  methods: {
    increment() {},
  },
}
</script>

<style scoped>
.paper {
  background-color: white;
  max-width: 100%;
  width: 21cm;
  box-shadow: 2px 5px 15px 1px #363636;
}
</style>
<style>
div {
  font-family: 'Karla', sans-serif;
}
</style>
