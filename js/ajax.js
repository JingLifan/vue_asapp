var $get = function(){
    console.log("发出ajax请求");
}
var $post = function(){
    console.log("发出post请求");
}
exports.$get = $get;
exports.post = $post;