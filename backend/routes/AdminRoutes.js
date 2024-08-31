const  { Getuser, deletUser, makeAdmin } = require('../controllers/Admin.js');
const  isAdmin  = require('../middleware/verifyToken.js');

const express = require('express');


const AdminRoutes = express.Router();

AdminRoutes.get('/getuser', isAdmin, Getuser);
AdminRoutes.delete('/delet/:id',isAdmin,deletUser)
AdminRoutes.put('/:id', isAdmin, makeAdmin);


module.exports = AdminRoutes