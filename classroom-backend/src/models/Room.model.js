const mongoose = require('mongoose');
const Schema = mongoose.Schema

const RoomSchema = new Schema ({
    SchoolName: {type: String, required: [true, 'Please add data']},
    Subject: {type: String, required: [true, 'Please add data']},
    RoomCode: {type: String, required: [true, 'Please add data']},
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;