const express = require('express')

const router = express.Router()

router.use(require('./user'))
router.use(require('./blog'))
router.use(require('./type'))

module.exports = router