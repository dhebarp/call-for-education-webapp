const express = require('express');
const router = express.Router();
const { getRoom, createRooms } = require('../controllers/Room.controller');

router
.route('/')
.get(getRoom)
.post(createRooms);

// router
// .route('/:id')
// .delete()

module.exports = router;