const mongoose = require('mongoose');
const dburl = process.env.DB_URL;
module.exports = mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true });