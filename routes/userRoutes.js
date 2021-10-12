const express = require('express')
const router = express.Router()
const userController = require('../controllers/orderController')

router.get('/get/:id',orderController.single)
router.get('/:page/:limit',orderController.list)
router.post('/',orderController.create)
router.post('/search',orderController.search)
router.put('/:id',orderController.edit)
router.delete('/:id',orderController.destroy)

module.exports = router;