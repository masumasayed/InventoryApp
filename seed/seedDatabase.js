const connectToMongo = require('../config/db');
const Item = require('../models/itemModel');
const Customer = require('../models/customerModel');
const Purchase = require('../models/purchaseModel');
const itemsData = require('../data/items.json');
const customersData = require('../data/customers.json');
const purchasesData = require('../data/purchases.json');

// Function to seed the database
async function seedDatabase() {
  try {
    // Connect to MongoDB
    await connectToMongo();

    // Insert items data into the database
    await Item.insertMany(itemsData);
    console.log('Items inserted successfully');
    // await Item.collection.drop(itemsData);
    // console.log('drop successfully');
    // Insert customers data into the database
    await Customer.insertMany(customersData);
    console.log('Customers inserted successfully');

    // Insert purchases data into the database
    await Purchase.insertMany(purchasesData);
    console.log('Purchases inserted successfully');
//     await Purchase.collection.drop(purchasesData);
// console.log('drop successfully');

    // Drop the customers collection before inserting data
// await Customer.collection.drop(customersData);
// console.log('drop successfully');


    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
}

module.exports = seedDatabase;
