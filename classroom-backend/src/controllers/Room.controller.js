const Room = require('../models/Room.model');

//@desc GET room
//@route GET /rooms
//@access public

exports.getRoom = async (req, res, next) => {
    try {
        const rooms = await Room.find();

        return res.status(200).json({
            success: true,
            count: rooms.length,
            data: rooms
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

//@desc POST create New Room
//@route POST /rooms
//@access public
exports.createRooms = async (req, res, next) => {
    try {
        const newRoom = await Room.create(req.body);

        return res.status(201).json({
            success: true,
            data: newRoom
        });
    } catch (err) {
        if (err.name == 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}