const mongoose = require('mongoose');

const flagSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.Number },
    name: { type: mongoose.Schema.Types.String },
    image: { type: mongoose.Schema.Types.String }
});

const flagModel = module.exports = mongoose.model('flags', flagSchema);