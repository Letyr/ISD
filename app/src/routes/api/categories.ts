import { Router } from 'express';
import { Category } from '../../models/Category';

export const categories = Router().get('/category', function(req, res, next) {
  Category.findAll().then(categories => {
      console.log('get categories');
      res.send(categories);
  });
});
