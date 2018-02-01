<template>
  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <el-form :inline="true" :model="formInline" style="padding-top: 10px; margin-left: 10px">
      <el-form-item label="username">
        <el-input v-model="formInline.username" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item label="age">
        <el-input v-model="formInline.age" placeholder="age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addUser">Add</el-button>
      </el-form-item>
    </el-form>
    <el-table
    :data="tableData"
    border
    height="250"
    text-align="center">
      <el-table-column
        label="id" prop="id" fixed="left">
      </el-table-column>
      <el-table-column
        label="name" prop="name">
      </el-table-column>
      <el-table-column
        label="age" prop="age">
      </el-table-column>
      <el-table-column
        label="column1" prop="column1">
      </el-table-column>
      <el-table-column
        label="column2" prop="column2">
      </el-table-column>
      <el-table-column
        label="column3" prop="column3" >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      formInline: {
        username: '',
        age: ''
      },
      tableData: []
    }
  },
  methods: {
    addUser () {
      var name = this.formInline.username
      var age = this.formInline.age
      this.$http.post('/api/user/addUser', {
        username: name,
        age: age
      }, {}).then((response) => {
        this.getUser()
      })
    },
    getUser () {
      this.$http.get('/api/user/getUser').then((response) => {
        let body = response.body
        var data = []
        let _this = this
        for (let i = 0; i < body.length; i++) {
          var user = {}
          user.id = body[i].id
          user.name = body[i].name
          user.age = body[i].age
          user.column1 = body[i].column1
          user.column2 = body[i].column2
          user.column3 = body[i].column3
          data[i] = user
        }
        _this.tableData = data
      })
    }
  },
  created () {
    this.getUser()
  }
}
</script>
