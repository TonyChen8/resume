<template>
  <div class="">
    <cv-divider label="Profile"></cv-divider>
    <div class="">
      <div class="text-sm">{{ contents.profile }}</div>
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
