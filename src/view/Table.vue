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
    text-align="center">
      <el-table-column
        label="指标代码" prop="indexCode" fixed="left">
      </el-table-column>
      <el-table-column
        label="指标名称" prop="indexName">
      </el-table-column>
      <el-table-column
        label="行业名称" prop="tradeName">
      </el-table-column>
      <el-table-column
        label="信息来源" prop="informationSource">
      </el-table-column>
      <el-table-column
        label="单位" prop="unit">
      </el-table-column>
      <el-table-column
        label="指标数据" prop="indexData" >
      </el-table-column>
      <el-table-column
        label="数据披露频率" prop="frequency" >
      </el-table-column>
      <el-table-column
        label="发布日期" prop="relaseDate" >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: ' I ',
      formInline: {
        username: '',
        age: ''
      },
      tableData: []
    }
  },
  methods: {
    addUser () {
      // var name = this.formInline.username
      // var age = this.formInline.age
      // this.$http.post('/api/user/addUser', {
      //   username: name,
      //   age: age
      // }, {}).then((response) => {
      //   this.getUser()
      // })
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
    },
    getMacroData () {
      this.$http.get('http://192.168.1.248/api/MacroData').then((response) => {
        let body = response.body
        var data = []
        let _this = this
        for (let i = 0; i < body.length; i++) {
          var user = {}
          user.indexCode = body[i].indexCode
          user.indexName = body[i].indexName
          user.tradeName = body[i].tradeName
          user.informationSource = body[i].informationSource
          user.unit = body[i].unit
          user.indexData = body[i].indexData
          user.frequency = body[i].frequency
          user.relaseDate = body[i].relaseDate.substring(0, 10)
          data[i] = user
        }
        _this.tableData = data
      })
    }
  },
  created () {
    // this.getUser()
    this.getMacroData()
  }
}
</script>
