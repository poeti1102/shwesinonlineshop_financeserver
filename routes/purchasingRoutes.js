const express = require('express')
const router = express.Router()
const purchasingController = require('../controllers/purchasingController')

router.get('/',purchasingController.list)
router.post('/',purchasingController.create)
router.post('/search',purchasingController.search)
router.get('/get/:id',purchasingController.single)
router.put('/:id',purchasingController.edit)
router.delete('/:id',purchasingController.delete)

module.exports = router;