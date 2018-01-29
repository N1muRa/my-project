<template>
  <el-menu router :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#B3C0D1">
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
  /* 分类菜单*/
  .sortMenu{
    width: 100%;
    background-color:#fff;
    overflow-x: scroll;
    -webkit-overflow-x: scroll;
  }
  .sortMenu::-webkit-scrollbar{
    width: 0;
    height: 0;
    background-color: #fff;
  }
  .sortMenu-ul {
    min-width:500px;
    display: flex;
    justify-content: flex-start;
  }
  .sortMenu .cell{
    display: inline-block;
    font-size: 12px;
    margin: 0px 1em;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: relative;
    text-overflow: ellipsis;
    word-break: keep-all;
  }
  .sortMenu .cell.special a{
    color: #ff474c;
  }
  .sortMenu .cell.special:before {
    content: '';
    height: 2px;
    width: 100%;
    background: #ff474c;
    position: absolute;
    bottom: 0px;
  }
  .sortMenu .all{
    right: 0;
    top: 0;
    height: 35px;
    width: 35px;
    position: absolute;
    background: #fff;
    z-index: 10;
    display: flex;
    justify-content:center;
    align-items:center;
  }
  .sortMenu .all:before{
    content: '';
    height: 25px;
    width: 1px;
    position: absolute;
    box-shadow: 1px 0px 1px #e0e0e0;
    left: 0px;
  }
  .sortMenu .all img{
    display: block;
    width: 16px;
  }
  .sortMenu .pull-down{
    position: absolute;
    top: 40px;
    height:auto;
    width: 100%;
    background: #fff;
    z-index: 1;
    border-top: 1px solid #f2f2f2;

  }
  .pull-down-sort{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: space-around;
    flex-wrap: wrap;
    flex-direction: row
  }
  .pull-down-sort li{
    float: left;
    padding: .1rem
  }
  .pull-down-sort li a:hover{
    color: #ff474c;
  }
</style>
