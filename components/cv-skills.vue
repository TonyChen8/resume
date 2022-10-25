<template>
  <div class="">
    <cv-divider
      label="Skills And Frequency Of Use In Recent 5 Years"
    ></cv-divider>
    <div class="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-1">

      <cv-frequency label="HTML 5" :percent="5" />
      <cv-frequency label="CSS" :percent="5" />
      <cv-frequency label="Javascript" :percent="5" />
      <cv-frequency label="VueJS" :percent="4" />
      <cv-frequency label="ReactJS/Native" :percent="4" />
      <cv-frequency label="AngularJS" :percent="1" />
      <cv-frequency label="JQuery" :percent="1" />

      <cv-frequency label="PHP" :percent="4" />
      <cv-frequency label="Laravel" :percent="3" />
      <cv-frequency label="NodeJS" :percent="2" />
      <cv-frequency label="Wordpress" :percent="1" />

      <cv-frequency label="MySQL" :percent="3" />
      <cv-frequency label="MongoDB" :percent="2" />

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
