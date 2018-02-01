<template>
  <div>
    <h2>{{msg}}</h2>
    <hr/>
    <h3>{{$store.state.count}}</h3>
    <p>
      <button @click="addN(10)">+</button>
      <button @click="reduce(10)">-</button>
    </p>
    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  store,
  // computed: mapState({
  //   count: state => state.count // 理解为传入state对象，修改state.count属性
  // })
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count'])
    // ...mapActions(['addAction', 'reduceAction']),
  },
  methods: {
    ...mapMutations(['addN', 'reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
