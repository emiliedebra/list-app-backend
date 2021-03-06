/* @flow */

import express from 'express';
import bodyParser from 'body-parser';

import { connect } from './db-connection';
import { CONFIG } from './utils/config';
import { User } from './data-access/index';

const app: express$Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

connect()
  .then(() => {
    console.log('Database connected.');
  })
  .catch(err => console.log(err));

// GET
app.get('/users', (req: express$Request, res: express$Response) => User
  .getUsers()
  .then((result: Array<string>) => {
    res.send(result);
  })
  .catch((error: Error) => console.log(error)));

// get lists


// POST
// app.post('/add-user', (req: express$Request, res: express$Response) => User
//   .addUser(((req.body: any): TUser))
//   .then((result: Object) => {
//     res.status(200).send(result);
//   })
//   .catch((error: Error) => console.log(`ERROR: ${error.message}`)));

app.listen(CONFIG.PORT, () => {
  console.log('listening on port 3000');
});
