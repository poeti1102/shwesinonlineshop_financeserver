const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orderController')

router.get('/',orderController.list)
router.post('/',orderController.create)
router.post('/search',orderController.search)
router.get('/get/:id',orderController.single)
router.put('/:id',orderController.edit)
router.delete('/:id',orderController.delete)

module.exports = router;