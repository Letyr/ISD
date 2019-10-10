import { Router } from 'express';
import { Transfer } from '../../models/Transfer';

export const transfers = Router().get('/transfer', function(req, res, next) {
  Transfer.findAll().then(transfers => {
      res.send(transfers);
  });
});
