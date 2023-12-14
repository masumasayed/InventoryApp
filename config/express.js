const express = require('express');
const bodyParser = require('body-parser');
// const routes = require('../routes');


function configExpress(app) {
    // Middleware
    app.use(bodyParser.json());
 // Routes
const itemRoutes = require('../routes/items');
const customerRoutes = require('../routes/customers');
const purchaseRoutes = require('../routes/purchases');
const dashboardRouter = require('../routes/dashboard');

app.use('/', dashboardRouter);
app.use('/items', itemRoutes);
app.use('/customers', customerRoutes);
app.use('/purchases', purchaseRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
}

module.exports = configExpress;