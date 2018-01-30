<template>
  <el-menu router :default-active="$route.path" style="display: flex;overflow-x:  scroll;overflow-y:  hidden;border-bottom-width: 0;" mode="horizontal" @select="handleSelect" background-color="#B3C0D1">
    <el-menu-item index="/user">User</el-menu-item>
    <el-menu-item index="/news">News</el-menu-item>
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/order">Order</el-menu-item>
    <el-menu-item index="">E</el-menu-item>
    <el-menu-item index="">F</el-menu-item>
    <el-menu-item index="">G</el-menu-item>
    <el-menu-item index="">H</el-menu-item>
    <el-menu-item index="">I</el-menu-item>
    <el-menu-item index="">J</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'headerTab',
  data () {
    return {
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  #category-head{width:1000px;display: inline;white-space: nowrap;overflow-x:scroll;float:left;overflow-y:hidden}
  #category-head li{display:inline-block;width:80px;height:30px;padding-left:10px;}
</style>
