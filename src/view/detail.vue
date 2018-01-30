<template>
  <el-container direction="vertical">
    <el-header class="el-header-home" style="height: 10%">
      <div class="header">
      <img src="../assets/back.png" @click="back">
      <!--<span>{{item.NewsTitle}}</span>-->
        <span>News</span>
      <img src="../assets/like.png" >
      </div>
    </el-header>
    <el-main class="el-main-home" style="padding: 0">
      <div class="content">
      <div class="container">
      <div class="title">{{item.NewsTitle}}</div>
      <div class="message">
      <span>{{item.Date.substring(0,10)}}</span>
      <span>{{item.Author}}</span>
      </div>
      <img src=''>
      <div class="newsContent">{{item.Content}}</div>
      </div></div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'detail',
  methods: {
    back () {
      this.$router.go(-1) // 返回上一层
    }
  },
  created () {
    this.item = this.$route.params.dataObj
  },
  data () {
    return {
      isShow: true,
      item: ''
    }
  }
}
</script>

<style scoped>
  .el-header-home {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-around;
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
  .header {
    width: 100%;
    /*height: 1.33rem;*/
    /*background-color: #d43d3d;*/
    color: #fff;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
  }
  .header img {
    width: 25px;
    height: 25px;
    padding: 0 .19rem;
  }
  .content {
     padding-top: 1.33rem;
   }
  .container {
    margin: 20px;
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  .message {
    text-align: center;
    margin: 20px 0;
    color: #888;
  }
  .message span:last-child {
    margin-left: 10px;
  }
  .container img {
    width: 100%;
    margin-bottom: 20px;
  }
  .newsContent {
    font-size: 18px;
    line-height: 30px;
  }
</style>
