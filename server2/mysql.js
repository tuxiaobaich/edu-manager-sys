//加载mysql模块
const mysql = require('mysql');
var dbconfig = require('./config/dbConfig');

let query = function (sql, params) {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(dbconfig);
        //执行创建连接 
        connection.connect(function (err) {
            if(err){
                reject( err )
            }
            //开始数据操作
            //传入三个参数，第一个参数sql语句，第二个参数sql语句中需要的数据，第三个参数回调函数
            connection.query(sql, params, function(err, rows, fields){
                if ( err ) {
                    reject( err )
                } else {
                    resolve( rows )
                }
                // 结束会话
                //停止链接数据库，必须再查询语句后，要不然一调用这个方法，就直接停止链接，数据操作就会失败
                connection.end(function(err){
                    if(err){
                        console.log('关闭数据库连接失败！');
                        throw err;
                    }
                });
            });
        });
    }) 
}

//向外暴露方法
module.exports = query
