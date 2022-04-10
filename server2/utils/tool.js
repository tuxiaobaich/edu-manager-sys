/*
	tools.js
*/
// 先引入需要用到的依赖
const multer = require('multer')
const mkdirp = require('mkdirp')
const moment = require('moment')
const path = require('path')

// 获取当前的日期
const nowDate = moment().format('YYYY-MM-DD')

// 封装保存上传文件功能
const upload = ()=>{
    const storage  = multer.diskStorage({
        destination:async (req,file,cb)=>{ // 指定上传后保存到哪一个文件夹中
            await mkdirp(`./static/upload`)  // 创建目录
            cb(null,`static/upload`) //
        },
        filename:(req,file,cb)=>{ // 给保存的文件命名
            let extname = path.extname(file.originalname); // 获取后缀名
    
            let fileName = path.parse(file.originalname).name // 获取上传的文件名
            cb(null,`${fileName}-${Date.now()}${extname}`)
        }
    })

    return multer( {storage})
}

module.exports ={
    upload
}
