//导入第三方模块  CommonJS
//引用暴露的成员
var m = require('./add.js');
var show = function(){
    var a = 11;
    var b = 12;
    console.log(m.sum(a, b));
    console.log(m.str);
}
// show();

var get = require('./ajax.js');
get.$get();
get.post();
//CommonJS ---> Node.js

//ES6引入第三方模块的语法
import {zs} from './myQuery.js'
console.log(zs);
//原因是。我们在命令行中，通过node指令来执行一个js脚本。这是在node环境下执行的