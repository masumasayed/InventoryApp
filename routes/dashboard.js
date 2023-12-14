const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Define your dashboard routes here
router.get('/', dashboardController.viewDashboard);

module.exports = router;


// const express = require('express');

// const dashboardRouter = express.Router();

// const {
//     simulatePurchase
// } = require('../controllers/dashboard');

// // Define routes
// dashboardRouter.post('/buy', simulatePurchase);

// // Define a default route for the root path
// dashboardRouter.get('/', (req, res) => {
//   res.send('Welcome to the dashboard!');
// });

// module.exports = dashboardRouter;
