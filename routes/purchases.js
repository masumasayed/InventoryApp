const express = require('express');
const router = express.Router();
const purchasesController = require('../controllers/purchasesController');

// GET all purchases
router.get('/', purchasesController.getAllPurchases);

// GET a specific purchase by ID
router.get('/:id', purchasesController.getPurchaseById);

// POST a new purchase
router.post('/', purchasesController.createPurchase);

// PUT (update) a specific purchase by ID
router.put('/:id', purchasesController.updatePurchase);

// DELETE a specific purchase by ID
router.delete('/:id', purchasesController.deletePurchase);

module.exports = router;
