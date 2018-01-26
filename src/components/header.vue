<template>
  <el-menu router :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#B3C0D1">
    <el-menu-item index="/avue">A</el-menu-item>
    <el-menu-item index="/bvue">B</el-menu-item>
    <el-menu-item index="/">C</el-menu-item>
    <el-menu-item index="/order">D</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'headerTab',
  data () {
    return {
      activeIndex: '1'
      // activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>
