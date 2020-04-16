<template>
  <div>
    <h2>Firebase testing</h2>
    <p>{{ msg }}</p>
    <p>{{ list }}</p>
    <p>{{ posts }}</p>
    <button @click="onClick">Click!!</button>
  </div>
</template>

<script>
import { firebas, db } from '@/plugins/firebase'

export default {
  data() {
    return {
      msg: 'hello nuxt',
      posts: [],
    }
  },
  computed: {
    list() {
      return this.$store.state.list
    },
  },
  async mounted() {
    this.msg = 'mouted!!'
    const snapshot = await db.collection('posts').get()
    snapshot.forEach(doc => {
      console.log(doc)
      this.posts.unshift(doc.data())
    })
  },
  methods: {
    onClick() {
      console.log('clicked!!')
    },
  },
}
</script>

<style></style>
