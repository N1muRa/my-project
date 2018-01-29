<template>
  <div class="hello">
    <pull-to :top-load-method="refresh" :bottom-load-method="refresh">
      <ul v-for="item in DataList" v-bind:key="item.id">
        <li  class="list">{{item}}
        </li>
      </ul>
    </pull-to>
  </div>
</template>

<script>
import PullTo from 'vue-pull-to'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '梅林',
      DataList: []
    }
  },
  components: {
    PullTo
  },
  methods: {
    getNewsList () {
      this.$http.get('/api/user/getUser').then((response) => {
        // console.log(response.body[1])
        this.DataList = response.body
      })
    },
    refresh (loaded) {
      this.getNewsList()
      loaded('done')
    }
  },
  created () {
    this.getNewsList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{
  position:relative;
  width:100%;
  height:4.5em;
  margin-top:5%;
  border-bottom: 1px solid rgba(160, 160, 160, 0.3);
}
</style>
