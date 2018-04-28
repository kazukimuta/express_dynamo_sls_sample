'use strict';

const dynamoDb = require('../config/dynamoDB');

const USERS_TABLE = process.env.USERS_TABLE;

const User = {
    new: (id, name) => {
        return {
            userId: id,
            name
        }
    },
    get: (id) => {
        return new Promise((resolve, reject) => {
            if(id === null || id === undefined || id === '') {
                reject(new Error('id is empty'));
            }
            const params = {
                TableName: USERS_TABLE,
                Key: {
                    userId: id,
                },
            }
            dynamoDb.get(params, (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result.Item);
            });
        })
    },
    create: (user) => {
        return new Promise((resolve, reject) => {
            const params = {
                TableName: USERS_TABLE,
                Item: {
                    userId: user.userId,
                    name: user.name
                },
            };
            dynamoDb.put(params, (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        })
    }
}
module.exports = User;