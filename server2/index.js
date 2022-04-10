const bodyParser = require('body-parser'); // 引入body-parser模块
const express = require('express')  //引入express模块
const app = express();  //创建express的实例
// 为客户端提供跨域请求
const cors = require('cors');
const router = require('./router')
const errorHandler = require('./middleware/error-handler')

app.use(cors())

app.use(bodyParser.json()); // 解析json数据格式
app.use(bodyParser.urlencoded({extended: true})); // 解析form表单提交的数据application/x-www-form-urlencoded


// 挂载路由
app.use('/api', router);
app.use(express.static('static/upload')); // 设置静态图片访问的路径
app.use(express.json())

const PORT = process.env.PORT || 3000
// 挂载统一处理服务端错误中间件
app.use(errorHandler())

// 监听端口
app.listen(PORT, () => {
    console.log('success listen at port:3000......');
});