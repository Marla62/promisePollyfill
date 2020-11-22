type Callback = () => void;
type ReturnFn = (...any: any[]) => void;
declare global {
    // 扩展全局方法
    interface Function { // 接口的合并
        before(fn: Callback): ReturnFn;
    }
}
// 基于原来的函数来扩展
Function.prototype.before = function (fn){
    // this === core
    return  (...args) => {
        fn(); // 先调用before方法
        this(...args); // 再调用真正的方法
    }
}

function core(...args: any[]) {
    console.log(args);
}

let fn = core.before(() => {
    console.log('before core...');
});

fn(1,2,3);

export {};
