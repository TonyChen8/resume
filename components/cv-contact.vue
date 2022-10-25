<template>
  <div class="">
    <cv-divider label="Contact Me"></cv-divider>
    <div class="flex flex-col">
      <div
        class="flex flex-row items-center sm:flex-col sm:items-start sm:mb-1"
      >
        <div class="flex flex-row items-center">
          <div class="dot sm:hidden" />
          <b class="text-sm">Mobile:</b>
        </div>
        <a class="sm:text-sm" :href="`tel:${contents.mobile}`">{{ contents.mobile }}</a>
      </div>
      <div class="flex flex-row items-center sm:flex-col sm:items-start">
        <div class="flex flex-row items-center">
          <div class="dot sm:hidden" />
          <b class="text-sm">Email:</b>
        </div>
        <a class="sm:text-sm" href="`mailto:${contents.email}`">{{ contents.email }}</a>
      </div>
    </div>
    <cv-space />
  </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: Object,
      default(rawProps) {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.dot {
  background-color: #52c6f9;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
}
b {
  margin-right: 5px;
}
a {
  color: #4F9FD7;
}
</style>
