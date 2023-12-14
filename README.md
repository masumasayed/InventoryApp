# Inventory App

## Overview

This repository contains the source code for an inventory management application built with Node.js, Express, and MongoDB. The app facilitates the management of customers, items, and purchases, providing a comprehensive solution for inventory tracking.

## Project Structure

- **Config:** `db.js` for MongoDB connection, `express.js` for Express configuration.
- **Controllers:** `customersController.js`, `itemsController.js`, `dashboardController.js`, `purchasesController.js`.
- **Data:** Sample data files: `customers.json`, `items.json`, `purchases.json`.
- **Models:** Mongoose models for Customer, Item, and Purchase entities.
- **Routes:** Express routes for customers, items, purchases, and the dashboard.
- **Seed:** `seedDatabase.js` script to populate the database with sample data.
- **App:** `app.js` for server setup, MongoDB connection, and Express configuration.

## Dependencies

- [dotenv](https://www.npmjs.com/package/dotenv) - Enables environment variable management.
- [express](https://www.npmjs.com/package/express) - Web application framework for Node.js.
- [express-es6-template-engine](https://www.npmjs.com/package/express-es6-template-engine) - ES6 template engine for Express.
- [mongoose](https://www.npmjs.com/package/mongoose) - MongoDB object modeling tool.
- [nodemon](https://www.npmjs.com/package/nodemon) - Monitors for changes and automatically restarts the server.

## Getting Started

1. Install dependencies: `npm install`
2. Run the app in development mode: `npm run dev`
3. Access the app at `http://localhost:3000`

Feel free to explore and use this repository as a starting point for your own inventory management projects!
