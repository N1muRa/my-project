<template>
  <el-container>
    <el-header><header-tab></header-tab></el-header>
    <el-main><router-view/></el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import HeaderTab from '../components/header'

export default {
  components: {HeaderTab},
  name: 'home'
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
  }

  body > .el-container {
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
