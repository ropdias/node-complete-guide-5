import express from 'express';
import {
  getProducts,
  getAddProduct,
  postAddProduct,
} from '../controllers/admin';

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', getAddProduct);

// /admin/products => GET
router.get('/products', getProducts);

// /admin/add-product => POST
router.post('/add-product', postAddProduct);

export default router;
