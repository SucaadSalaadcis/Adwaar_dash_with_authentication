const express = require('express');
const { register, login, Logout, forgetPassword, resetPassword } = require('../controllers/Auth.js');

const AuthRoutes =  express.Router();

AuthRoutes.post('/register', register);
AuthRoutes.post('/forgot-password',forgetPassword);
AuthRoutes.post('/reset-password/:token',resetPassword);
AuthRoutes.post('/login', login);
AuthRoutes.post('/logout', Logout);


module.exports = AuthRoutes;