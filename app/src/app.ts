import express from 'express';
import { connection } from './database/connection';
// import { userController } from './routes/users';

export const app = express();

// app.use('/users', userController);

app.use('/', (req, res) => {
    connection.authenticate()
    .then(
        errors => {
            res.send({
                msg: `test msg`,
                connectionEstablish: !Boolean(errors),
                errors: errors
            });
        }
    )
    .catch(
        errors => {
            res.send({
                msg: `test msg`,
                connectionEstablish: !Boolean(errors),
                errors: errors
            });
        }
    );
});
