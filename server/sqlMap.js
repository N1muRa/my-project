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
  },
  // Sample Data
  sample: {
    get_sample_data: 'select date, open, close, lowest, highest from tb_sample_data',
    add_sample_data: 'insert into tb_sample_data(date, open, close, lowest, highest) values(?, ?, ?, ?, ?)',
    get_macro_data: 'select * from tb_sample_macrodata'
  }
}

module.exports = sqlMap
