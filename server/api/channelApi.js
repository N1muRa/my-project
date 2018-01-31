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

// 获取channel列表接口---未完成
router.get('', (req, res) => {
  var sql = $sql.news.getNewsList
  // console.log(sql)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    } else if (result) {
      jsonWrite(res, result)
      console.log(result)
    }
  })
})

// 获取News data接口
router.get('/News', (req, res) => {
  var sql = $sql.channels.news
  // console.log(sql)
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
