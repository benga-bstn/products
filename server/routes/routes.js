const { getProduct } = require('../controllers/product')
const { getProducts } = require('../controllers/products')
const router = require('express').Router()


router.route('/products')
    .get(getProducts)

router.route('/products/:id')
    .get(getProduct)
module.exports = router