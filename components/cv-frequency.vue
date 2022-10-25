<template>
  <div class="">
    <div class="font-bold" style="font-size: 13px">
      {{ label }}
    </div>
    <div class="progress">
      <div class="percent" :style="{ width: `${(percent / 5) * 100}%` }" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, default: '' },
    percent: { type: Number, default: 0 },
  },
}
</script>

<style scoped>
.progress {
  width: 100%;
  height: 13px;
  border: 1px #52c6f9 solid;
  border-radius: 5px;
}
.percent {
  background-color: #52c6f9;
  height: 100%;
}
</style>
