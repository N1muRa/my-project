var models = require('../db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sqlMap')

// 连接数据库
var conn = mysql.createConnection(models.mysql)

conn.connect()
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add
  var params = req.body
  console.log(params)
  conn.query(sql, [params.username, params.age], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

// 查询用户接口 未完成
router.post('/selectUser', (req, res) => {
  var sql = $sql.user.select_name
  var params = req.body
  console.log(params)
  conn.query(sql, params.username, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result[0] === undefined) {
      res.send('-1')
    } else {
    }
  })
})

// 获取用户信息接口
router.get('/getUser', (req, res) => {
  var sql = $sql.user.select_user
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    } else if (result) {
      jsonWrite(res, result)
      // console.log(result)
    }
  })
})

module.exports = router
