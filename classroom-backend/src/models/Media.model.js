const mongoose = require('mongoose');
const Schema = mongoose.Schema

const MediaSchema = new Schema ({
    Video: String,
    room_id: String
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;