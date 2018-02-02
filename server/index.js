const userApi = require('./api/userApi')
const newsApi = require('./api/newsApi')
const channelApi = require('./api/channelApi')
const sampleDataApi = require('./api/sampleDataApi')

const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 后端api路由
app.use('/api/news', newsApi)
app.use('/api/user', userApi)
app.use('/api/channel', channelApi)
app.use('/api/sample', sampleDataApi)
// app.use('./api/sampleData', sampleDataApi)

// 监听端口
app.listen(3000)
console.log('success listen at port:3000......')
