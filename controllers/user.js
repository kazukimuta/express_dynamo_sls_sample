'use strict';

const User = require('../models/user');

const getUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await User.get(userId);
        if (!user) {
            res.json({error: 'no user'});
        }
        res.json(user);
    } catch(e) {
        console.error('userController.getUser', e);
        res.status(404).json({error: 'internal error'});
    }
    return
}

const createUser = async (req, res) => {
    const newUser = User.new(req.body.userId, req.body.name);
    try {
        await User.create(newUser);
        res.json({error: ''});
    } catch(e) {
        console.error('userController.createUser', e);
        res.status(404).json({error: 'internal error'});
    }
    return
}

module.exports = {
    getUser,
    createUser,
}