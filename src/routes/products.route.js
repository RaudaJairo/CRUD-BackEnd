const { Router } = require('express');
const ProductsController = require('../controllers/products.controller');

// Initialization
const router = Router();

router.route('/') // ej: /products
    .get(ProductsController.getProducts)
    .post(ProductsController.newProduct);

router.route('/:id') // ej: /products/1 | /products/2
    .get(ProductsController.getProductById)
    .delete(ProductsController.deleteProduct);

module.exports = router;
