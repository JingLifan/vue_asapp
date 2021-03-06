//1.配置打包入口
//2.配置打包出口

//这个文件，用的是nodejs语法
//需要使用nodejs提供的方法，来读取当前目录的绝对路径
const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: { //专门用于配置所有的第三方模块的 loader 加载器
        rules: [ //这里是设置第三方加载器的匹配规则
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(jpg|jpeg|gif|png|bmp)$/, use: 'url-loader'},
            {test: /\.(otf|eot|svg|ttf|woff|woff2)$/, use: 'url-loader'},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.js$/, use: 'babel-loader'},
            {test: /\.vue$/, use: 'vue-loader'}

        ]
    },
    resolve: {
        alias: {
            // "vue$": 'vue/dist/vue.js'
            // mui: path.resolve(__dirname, './src/lib/mui/js/mui.min.js')  
        }
    },
    plugins: [
        new VueLoaderPlugin()  //配置插件节点
    ]
}