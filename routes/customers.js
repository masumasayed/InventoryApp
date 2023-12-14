const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customersController');

// GET all customers
router.get('/', customersController.getAllCustomers);

// GET a specific customer by ID
router.get('/:id', customersController.getCustomerById);

// POST a new customer
router.post('/', customersController.createCustomer);

// PUT (update) a specific customer by ID
router.put('/:id', customersController.updateCustomer);

// DELETE a specific customer by ID
router.delete('/:id', customersController.deleteCustomer);

module.exports = router;
