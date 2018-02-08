/* @flow */

import DB from '../db-connection';

import type { TUser } from '../utils/types';

export default class User {
  // static to avoid 'this' error
  static getUsers(): Promise<*> {
    return new Promise((resolve, reject) => {
      DB
        .connection()
        .collection('users')
        .find()
        .toArray((err: Error, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        });
    });
  }

  static addUser(user: TUser): Promise<*> { // need to change mixed to userObject
    return new Promise((resolve, reject) => {
      DB
        .connection()
        .collection('users')
        .save(user, (err: Error, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        });
    });
  }
}
