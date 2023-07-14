import { checkAuth } from '../middleware/auth.middleware';

const express = require('express');
const {addUser} = require('../controller/newsletter');
const router = express.Router();

router
  .post( checkAuth, "/addUser",addUser)

exports.router=router;