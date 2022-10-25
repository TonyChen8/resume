<template>
  <div class="">
    <cv-divider label="Work Experience"></cv-divider>
    <cv-experience-section
      v-for="(experience, index) in contents.experiences"
      :key="index"
      :content="experience"
    >
    </cv-experience-section>
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
