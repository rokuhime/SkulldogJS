const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.Number },
    name: { type: mongoose.Schema.Types.String },
    gacha: { type: mongoose.Schema.Types.Array }
});

const userModel = module.exports = mongoose.model('userdata', userSchema);