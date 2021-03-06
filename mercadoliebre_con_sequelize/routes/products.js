var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')
var uploadFile = require('../middlewares/uploadFile')   
var middProd = require('../middlewares/prodValidation')

/* PRODUCTS */
router.get('/', productsController.products);

/* CREATE PRODUCT  */
router.get('/create', productsController.create);

/* CREATE PRODUCT POST  */
router.post('/create', uploadFile.uploadFile, middProd.prodValidation, productsController.postProduct);

/* PRODUCT DETAIL */
router.get('/:id', productsController.productDetail);

/* PRODUCT DETAIL BORRAR */
router.get('/:id/delete', productsController.delete);

/* PRODUCT DETAIL BORRAR */
router.delete('/:id/delete', productsController.deleteProduct);

/* PRODUCT DETAIL MODIFICAR*/
router.get('/:id/edit', productsController.edit);

/* PRODUCT PUT MODIFICAR*/
router.put('/:id/edit', middProd.prodValidation, productsController.putEditProduct);

module.exports = router;