// const Item = require('../models/itemModel');
// const Purchase = require('../models/purchaseModel');
// const Customer = require('../models/customerModel');
  

// async function simulatePurchase(req, res) {

//   console.log(req.body);

//   try {
//     const { itemid, qty } = req.body;

//     // Create a new purchase record in the 'purchases' collection
//     const newPurchase = await Purchase.newPurchase({
//       item_id: itemid,
//       purchase_qty: qty, // Make sure you have this property
//     });

//     // Update the inventory for the specific item
//     await Item.inventoryChange(itemid, -qty);

//     res.send(`Purchase ID: ${newPurchase._id}`);
//   } catch (error) {
//     console.error('Error simulating purchase:', error);
//     res.status(500).send('Internal Server Error');
//   }
// }

// module.exports = {
//   simulatePurchase,
// };

// async function viewDashboard(req, res) {
//     try {
//       // Example: Get total purchases, total items, total customers
//       const totalPurchases = await Purchase.countDocuments();
//       const totalItems = await Item.countDocuments();
//       const totalCustomers = await Customer.countDocuments();
  
//       res.json({
//         totalPurchases,
//         totalItems,
//         totalCustomers,
//       });
//     } catch (error) {
//       console.error('Error fetching dashboard data:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   }
  
//   module.exports = {
//     viewDashboard,
//   };

const Item = require('../models/itemModel');
const Purchase = require('../models/purchaseModel');
const Customer = require('../models/customerModel');

async function viewDashboard(req, res) {
  try {
    // Example: Get total purchases, total items, total customers
    const totalPurchases = await Purchase.countDocuments();
    const totalItems = await Item.countDocuments();
    const totalCustomers = await Customer.countDocuments();

    res.json({
      totalPurchases,
      totalItems,
      totalCustomers,
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = {
  viewDashboard,
};
