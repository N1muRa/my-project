// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(name, age) values (?, ?)',
    select_name: 'SELECT * from user where username = ?' // 用username进行查询
  }
}

module.exports = sqlMap
