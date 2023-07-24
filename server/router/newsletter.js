const  checkAuth  =require('../middleware/auth.middlware');

const express = require('express');
const {addUser} = require('../controller/newsletter');
const router = express.Router();

router
  .post( "/addUser",addUser)

exports.router=router;