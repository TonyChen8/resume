<template>
  <div class="header">
    <div class="" style="font-size: 23px">
      {{ contents.name }}
    </div>
    <div class="" style="font-size: 13px">
      {{ contents.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contents: Object,
  },
}
</script>

<style scoped>
.header {
  background-color: #343b45;
  color: white;
  font-family: 'Karla', sans-serif;
  padding: 15px 20px;
}
</style>
