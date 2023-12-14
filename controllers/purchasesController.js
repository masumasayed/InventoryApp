const Purchase = require('../models/purchaseModel');

const purchasesController = {
  // Get all purchases
  getAllPurchases: async (req, res) => {
    try {
      const purchases = await Purchase.find();
      res.json(purchases);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Get a specific purchase by ID
  getPurchaseById: async (req, res) => {
    try {
      const purchase = await Purchase.findById(req.params.id);
      if (!purchase) {
        return res.status(404).json({ message: 'Purchase not found' });
      }
      res.json(purchase);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Create a new purchase
  createPurchase: async (req, res) => {
    try {
      const newPurchase = await Purchase.create(req.body);
      res.status(201).json(newPurchase);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Update a specific purchase by ID
  updatePurchase: async (req, res) => {
    try {
      const updatedPurchase = await Purchase.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedPurchase) {
        return res.status(404).json({ message: 'Purchase not found' });
      }
      res.json(updatedPurchase);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },

  // Delete a specific purchase by ID
  deletePurchase: async (req, res) => {
    try {
      const deletedPurchase = await Purchase.findByIdAndDelete(req.params.id);
      if (!deletedPurchase) {
        return res.status(404).json({ message: 'Purchase not found' });
      }
      res.json({ message: 'Purchase deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = purchasesController;
