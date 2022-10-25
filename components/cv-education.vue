<template>
  <div class="">
    <cv-divider label="Education"></cv-divider>
    <div class="sm:grid grid-cols-10 gap-x-10 gap-y-3">
      <div class="col-span-2 grid grid-rows-2 items-center">
        <div class="text-sm">{{ contents.education.date }}</div>
        <div class="text-sm">{{ contents.education.location }}</div>
      </div>
      <div class="col-span-8 grid grid-rows-2 items-center">
        <div class="font-bold">{{ contents.education.degree }}</div>
        <div class="text-sm">{{ contents.education.university }}</div>
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

<style scoped></style>
