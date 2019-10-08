import { Router } from 'express';
import { User } from '../models/User';


/* GET users listing. */
export const userController = Router().get('/', function(req, res, next) {
  User.findAll().then(users => {
      res.send(users);
  });
});
