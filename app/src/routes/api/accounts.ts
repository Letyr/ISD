import { Router } from 'express';
import { Account } from '../../models/Account';

export const accounts = Router().get('/account', function(req, res, next) {
    console.log('account');
    Account.findAll().then(accounts => {
        console.log('get all accounts');
        res.send(accounts);
    });
});
