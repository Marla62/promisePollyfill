// 函数科里化
function sum(a, b, c, d) {
  return a+ b + c +d;
}

function curr(fn) {
  function exec(sumArgs = []) {
   return sumArgs.length >= fn.length ? fn(...sumArgs) : (...args) =>  exec([...sumArgs, ...args]);
  }
  return exec();
}

console.log('function-curry:', curr(sum)(1)(2)(3, 4));
