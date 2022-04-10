const express = require('express')
const router = express.Router()
const query = require('../mysql')


//用户登录
router.post('/users/login', async (req, res, next) => {
    try {
        let { phone, password } = req.body;
        const sql = `select * from edu_user where mobile=${phone} and mobile_psw=${password}`
        let result = await query(sql)
        if(result.length > 0) {
            res.json({
                code: '000000',
                message: "success",
                content: result
            })
        } else {
            res.json({
                code: '201',
                message: "fail",
                content: result
            })
        }
        
    } catch (err) {
        next(err)
    }
})

// 文章相关路由
module.exports = router