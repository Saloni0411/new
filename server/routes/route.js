import express from 'express';
const router = express.Router();

import User from '../models/userModel.js'
import contactModel from '../models/contactModel.js'
import Jwt from 'jsonwebtoken';
const jwtKey = 'xenonstach';

router.post('/register', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    Jwt.sign({ result }, jwtKey, { expiresIn: '2h' }, (err, token) => {
        if (err) {
            res.send({ result: "Something went wrong" });
        }
        res.send({ result, token: token })
    })
})

router.post('/login', async (req, res) => {
    let user = await User.findOne(req.body).select("-password");
    if (req.body.password && req.body.email) {
        if (user) {
            Jwt.sign({ user }, jwtKey, { expiresIn: '2h' }, (err, token) => {
                if (err) {
                    res.send({ result: "Something went wrong" });
                }
                res.send({ user, token: token })
            })
        } else {
            res.status(404).send({ result: 'No user found' })
        }
    } else {
        res.status(404).send({ result: 'No user found' })
    }
})

router.post('/contact', async (req, res) => {
    try {
        let contact = new contactModel(req.body);
        let result = await contact.save();
        result = result.toObject();
        res.send({ result})
    } catch (error) {
        res.send(error.message)
    }
})



export default router;