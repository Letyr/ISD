import { Router } from 'express';
import { Change } from '../../models/Change';

export const changes = Router();

changes.get('/change', function(req, res, next) {
  Change.findAll().then(changes => {
      res.send(changes);
  });
});

changes.get('/change/:id', function(req, res, next) {
  Change.findOne({
    where: {
      id: req.params.id
    }
  }).then(change => {
    res.send(change);
  })
});

changes.get('/change/:id/account', function(req, res, next) {
  Change.findOne({
    where: {
      id: req.params.id
    }
  }).then(change => {
    if (change) {
      console.log('change: ', change.getAccount());
      change.getAccount().then(account => {
        console.log('Account: ', account);
        res.send(account);
      });
    }
  })
});
