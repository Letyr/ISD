import express from 'express';
import { connection } from './database/connection';
import { api } from './routes/api/api';
// import { categories } from './routes/api/categories';
// import { changes } from './routes/api/changes';

export const app = express();

app.use(api);
// app.use(categories);
// app.use(changes);

// app.use('/', (req, res) => {
//     connection.authenticate()
//     .then(
//         errors => {
//             res.send({
//                 msg: `test msg`,
//                 connectionEstablish: !Boolean(errors),
//                 errors: errors
//             });
//         }
//     )
//     .catch(
//         errors => {
//             res.send({
//                 msg: `test msg`,
//                 connectionEstablish: !Boolean(errors),
//                 errors: errors
//             });
//         }
//     );
// });
