const mongoose = require('mongoose');
const catalogSchema = require('../db/schemas/catalogSchema');

const Catalog = mongoose.model('catalog', catalogSchema);

module.exports = Catalog;