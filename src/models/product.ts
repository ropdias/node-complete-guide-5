import fs from 'fs';
import path from 'path';
import { rootDir } from '../util/path';

export interface ProductProps {
  title: string;
  imageUrl: string;
  description: string;
  price: string;
}

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (cb: (products: Product[]) => void): void => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent.toString()));
    }
  });
};

export default class Product {
  constructor(
    public title: string,
    public imageUrl: string,
    public description: string,
    public price: string
  ) {}

  save(): void {
    getProductsFromFile((products: Product[]) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  }

  static fetchAll(cb: (products: Product[]) => void): void {
    getProductsFromFile(cb);
  }
}
