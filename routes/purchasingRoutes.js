const express = require('express')
const router = express.Router()
const purchasingController = require('../controllers/purchasingController')

router.get('/get/:id',purchasingController.single)
router.get('/:page/:limit',purchasingController.list)
router.post('/',purchasingController.create)
router.post('/search',purchasingController.search)
router.put('/:id',purchasingController.edit)
router.delete('/:id',purchasingController.destroy)

module.exports = router;