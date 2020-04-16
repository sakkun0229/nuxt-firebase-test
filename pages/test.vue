<template>
  <div>
    <h2>Firebase testing</h2>
    <p>{{ msg }}</p>
    <p>{{ list }}</p>
  </div>
</template>

<script>
import { firebas, db } from '@/plugins/firebase'

export default {
  data() {
    return {
      msg: 'hello nuxt',
      list: [],
    }
  },
  async mounted() {
    this.msg = 'mouted!!'
    const snapshot = await db.collection('posts').get()
    snapshot.forEach(doc => {
      console.log(doc)
      this.list.unshift(doc.data())
    })
  },
}
</script>

<style></style>
