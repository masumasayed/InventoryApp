const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  purchase_qty: { type: Number, required: true },
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
