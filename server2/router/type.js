const express = require('express')
const router = express.Router()
const query = require('../mysql')
const tools = require('../utils/tool')

//获取分类列表
router.post('/type/typeList', async (req, res, next) => {
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

// 获取分类编辑信息
router.get('/type/getEditTypeInfo', async (req, res, next) => {
    try {
        const sql = `select * from t_type where id=${req.query.id}`
        let data = await query(sql)
        res.json({
            code: '000000',
            message: "success",
            blogInfo: data,
        })
    } catch (err) {
        next(err)
    }
})

// 删除分类
router.delete('/type/:id', async (req, res, next) => {
    try {
        const sql = `delete from t_type where id=${req.params.id}`
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
router.post('/type/saveOrUpdate', async (req, res, next) => {
    try {
        let { id, name } = req.body;
        if (id) {
            var sql = `update t_type set name='${name}' where id = ${id}`
        } else {
            var sql = `INSERT INTO t_type(name) VALUES('${name}')`
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

module.exports = router