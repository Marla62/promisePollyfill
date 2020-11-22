const fs = require('fs');
// TODO: 通过发布订阅模式解决此回调问题
function after(times, callback) {
  let result = '';
  return function (data) {
    times--;
    if(times > 0) {
      result += data;
    } else {
      callback(result);
    }
  }
}

let fn = after(2, (result) => {
  console.log('cb', result)
})
// 使用高阶函数解决异步回调的问题 计数器加回调 通过回调函数解决并发问题
fs.readFile('../dist/age.txt', 'utf8', (err, data) => {
  fn(data);
})
fs.readFile('../dist/name.txt', 'utf8', (err, data) => {
  fn(data);
})
