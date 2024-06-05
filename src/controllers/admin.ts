import { Request, Response, NextFunction } from 'express';
import Product from '../models/product';

export const getAddProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

export const postAddProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

export const getProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Product.fetchAll((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
    });
  });
};
