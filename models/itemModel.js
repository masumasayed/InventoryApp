const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 200 },
  sku: { type: String, required: true, maxlength: 50 },
  inventory: { type: Number, required: true },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
