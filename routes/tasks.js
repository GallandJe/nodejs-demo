const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/', TaskController.index)
router.post('/', TaskController.create)

module.exports = router
