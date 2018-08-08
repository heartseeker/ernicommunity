const express = require('express');
const router = express.Router();
const User = require('../models/user');
const _ = require('lodash');
const nodemailer = require('nodemailer');
const multer  = require('multer');
const path = require('path');
const https = require('https');
const Email = require('email-templates');

// registering a user
router.post('/', async (req, res) => {
    let user = new User(_.pick(req.body, ['first_name', 'last_name', 'company', 'position', 'contact', 'email']));

    try {
        user = await user.save();
    } catch (err) {
        return res.status(400).send(err);
    }

    return res.send(user);
});

module.exports = router;