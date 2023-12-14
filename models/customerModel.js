const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  first_name: { type: String, required: true, maxlength: 100 },
  last_name: { type: String, required: true, maxlength: 200 },
  email: { type: String, required: true, maxlength: 300 },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
