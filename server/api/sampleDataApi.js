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

// 获取sample data api
router.get('/getSampleData', (req, res) => {
  var sql = $sql.sample.get_sample_data
  console.log(sql + '!!!!!!!!!!!!!!!!!!!!!!')
  conn.query(sql, '', function (err, result) {
    if (err) {
      console.log(err)
    } else if (result) {
      jsonWrite(res, result)
      console.log(result)
    }
  })
})

// 增加数据接口
router.post('/addData', (req, res) => {
  var sql = $sql.sample.add_sample_data
  var params = req.body
  console.log(params)
  conn.query(sql, [params.date, params.open, params.close, params.lowest, params.highest], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

// macro data api
router.get('/getMacroData', (req, res) => {
  var sql = $sql.sample.get_macro_data
  console.log(sql + '!!!!!!!!!!!!!!!!!!!!!!')
  conn.query(sql, '', function (err, result) {
    if (err) {
      console.log(err)
    } else if (result) {
      jsonWrite(res, result)
      console.log(result)
    }
  })
})

module.exports = router
