<template>
  <div class="flex flex-col mb-8 text-sm">
    <div class="font-bold">
      {{ $moment(content.start).format('MM/YYYY') }}-{{
        $moment(content.end).format('MM/YYYY')
      }}
    </div>
    <div class="mb-3">{{ content.company }}</div>
    <div class="font-bold">Duties:</div>
    <ul class="list-disc ml-8 mb-1">
      <li v-for="(item, index) in content.duties" :key="index" class="">
        {{ item }}
      </li>
    </ul>
    <div class="font-bold">Achievements:</div>
    <ul class="list-disc ml-8 mb-1">
      <li v-for="(item, index) in content.achievements" :key="index" class="">
        {{ item }}
      </li>
    </ul>
    <div class="font-bold">Used Skills:</div>
    <ul class="list-disc ml-8 mb-1">
      <li v-for="(item, index) in content.skills" :key="index" class="">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      default(rawProps) {
        return {}
      },
    },
  },
}
</script>
<style scoped></style>
