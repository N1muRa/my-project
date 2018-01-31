// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(name, age) values (?, ?)',
    select_name: 'SELECT * from user where username = ?', // 用username进行查询
    select_user: 'SELECT * from user'
  },
  // 新闻
  news: {
    getNewsList: 'SELECT * FROM tb_news'
  },
  // channels
  channels: {
    channels: 'select channel from tb_channel',
    news: 'select * from tb_news'
  }
}

module.exports = sqlMap
