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

// 获取新闻列表api
router.get('/getNewsList', (req, res) => {
  var sql = $sql.news.getNewsList
  console.log(sql)
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
