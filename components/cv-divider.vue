<template>
  <div>
    <div class="label">
      {{ label }}
    </div>
    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, default: '' },
  },
}
</script>

<style scoped>
.label {
  font-family: 'Karla', sans-serif;
  font-size: 14px;
  font-weight: 900;
  padding-bottom: 5px;
}
.divider {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-width: 2px;
  margin-bottom: 5px;
}
</style>
