<template>
  <el-container direction="vertical">
    <el-header class="el-header-home" style="height: 10%; padding-left: 0; padding-right: 0;">
      <nav-tab></nav-tab>
    </el-header>
    <el-main class="el-main-home" style="padding: 0"><router-view/></el-main>
  </el-container>
</template>

<script>
import NavTab from '../components/nav'

export default {
  components: {
    NavTab
  },
  name: 'home'
}
</script>

<style >

  .el-header-home {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .el-footer-home {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    /*justify: space-around;*/
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 10%;
  }

  .el-aside {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main-home {
    background-color: #E9EEF3;
    color: #333;
    top: 10%;
    position: fixed;
    height: 90%;
    width: 100%;
    text-align: left;
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
