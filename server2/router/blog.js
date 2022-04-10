const express = require('express')
const router = express.Router()
const query = require('../mysql')
const tools = require('../utils/tool')

//获取博客列表
router.post('/blog/blogList', async (req, res, next) => {
    try {
        const sql = `select * from t_blog`
        let data = await query(sql)
        for(let i = 0; i < data.length; i++) {
            let result = await query(`select * from t_type where id = ${data[i].type_id}`)
            data[i]['typeName'] = result[0].name
        }
        res.json({
            code: '000000',
            message: "success",
            content: data
        })
    } catch (err) {
        next(err)
    }
})

// 获取博客编辑信息
router.get('/blog/getEditBlogInfo', async (req, res, next) => {
    try {
        const sql = `select * from t_blog where id=${req.query.id}`
        let data = await query(sql)

        const sql2 = `select * from t_type`
        let data2 = await query(sql2)
        res.json({
            code: '000000',
            message: "success",
            blogInfo: data,
            typeList: data2
        })
    } catch (err) {
        next(err)
    }
})

// 删除博客
router.delete('/blog/:id', async (req, res, next) => {
    try {
        const sql = `delete from t_blog where id=${req.params.id}`
        let data = await query(sql)
        res.json({
            code: '000000',
            message: "success",
            content: data
        })
    } catch (err) {
        next(err)
    }
})

//获取分类列表
router.get('/blog/typeList', async (req, res, next) => {
    try {
        const sql = `select * from t_type`
        let data = await query(sql)
        res.json({
            code: '000000',
            message: "success",
            content: data
        })
    } catch (err) {
        next(err)
    }
})

//保存与更新分类列表
router.post('/blog/saveOrUpdate', async (req, res, next) => {
    try {
        let { id, content, title, type_id,first_picture } = req.body;
        if (id) {
            var sql = `update t_blog set appreciation=1, commentabled=1,content='${content}',title='${title}',type_id='${type_id}',first_picture='${first_picture}' where id = ${id}`
        } else {
            var sql = `INSERT INTO t_blog(appreciation,commentabled,content,title,type_id,first_picture) VALUES(1,1,'${content}','${title}',${type_id},'${first_picture}')`
        }
        let data = await query(sql)
        res.json({
            code: '000000',
            message: "success",
            content: data
        })
    } catch (err) {
        next(err)
    }
})

router.post('/blog/upload',tools.upload().single('file'), async (req, res, next) => {
    try {
        res.json({
            code: '000000',
            message: "success",
            file: req.file,
            path:`http://localhost:3000/${req.file.filename}`
        })
    } catch (err) {
        next(err)
    }
})



module.exports = router