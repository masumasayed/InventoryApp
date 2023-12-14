const mongoose = require('mongoose');
// const  Customer = require('./models/customer')
const connectToMongo = require('./config/db');
const configExpress = require('./config/express');
// const Item = require('./models/item');
// const Purchase = require('./models/purchase');
const express = require('express');
// const router = express.Router();
const app = express();
// const port = 4000;
const seedDatabase = require('./seed/seedDatabase');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
// Use the environment variable for the MongoDB connection string
const mongoURI = process.env.MONGODB_URI;
// const customersData = require('./data/customers.json');
// const itemsData = require('./data/items.json');
// const purchasesData = require('./data/purchases.json');

// Connect to MongoDB
connectToMongo();
 // Seed the database
 seedDatabase();
// Configure Express
configExpress(app);


//  app.use(express.urlencoded({extended: false}));
//  // Routes
// const itemRoutes = require('./routes/item');
// const customerRoutes = require('./routes/customers');
// const purchaseRoutes = require('./routes/purchases');
// const dashboardRouter = require('./routes/dashboard');

// app.use('/', dashboardRouter);
// app.use('/items', itemRoutes);
// app.use('/customers', customerRoutes);
// app.use('/purchases', purchaseRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  