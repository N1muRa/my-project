<template>
  <div>
  <div class="header-left">
  <el-menu router :default-active="$route.path" style="display: flex;overflow-x:  scroll;overflow-y:  hidden;border-bottom-width: 0;" mode="horizontal" @select="handleSelect" background-color="#B3C0D1">
    <el-menu-item index="/user">User</el-menu-item>
    <el-menu-item index="/news">News</el-menu-item>
    <el-menu-item index="/hello">Home</el-menu-item>
    <el-menu-item index="/order">E</el-menu-item>
    <el-menu-item index="">F</el-menu-item>
    <el-menu-item index="">G</el-menu-item>
    <el-menu-item index="">H</el-menu-item>
    <el-menu-item index="">I</el-menu-item>
    <el-menu-item index="">J</el-menu-item>
  </el-menu>
  </div>
  <div class="header-right">
    <!--<i class="el-icon-search"></i>-->
    <router-link to=""><i class="el-icon-circle-plus-outline"></i></router-link>
  </div>
  </div>
</template>

<script>
import store from '@/vuex/store'

export default {
  name: 'navTab',
  store,
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('channelsAction')
    this.$store.dispatch('acGetData', '头条')
    this.$store.commit('loading', true)
  },
  computed: {
    channels () {
      return this.$store.state.channels
    },
    newData () {
      return this.$store.state.channelData
    },
    isLoading () {
      return this.$store.state.load
    }
  },
  methods: {
    clickChannel (channel, index) {
      this.$store.state.channelData = ''
      scrollTo(0, 0)
      this.$store.state.load = true
      this.$store.state.isActive = index
      this.$store.commit('muChannelIndex', index)
      this.$store.commit('muIsActive', index)
      this.$store.dispatch('getDataAction', this.$store.state.channels[this.$store.state.channelIndex])
    },
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .el-menu-item {
    color: #fff;
  }
  .header-left {
    float: left;
    width: 80%;
    margin-right: -300px;
  }
  .header-right {
    float: right;
    width: 60px;
  }
  /*#category-head{width:1000px;display: inline;white-space: nowrap;overflow-x:scroll;float:left;overflow-y:hidden}*/
  /*#category-head li{display:inline-block;width:80px;height:30px;padding-left:10px;}*/
</style>
