<template>
  <article id="app">
    <h1>{{ page.head }}</h1>
    <nuxt-content :document="page" />
    {{ count }}
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('test').fetch()

    return {
      page,
    }
  },

  data() {
    return {
      count: 0,
    }
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件监听器绑定
  methods: {
    increment() {
      this.count++
    },
  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  },
}
</script>
