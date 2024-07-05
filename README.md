# Order and Product Management Application

This application manages orders and products using Node.js, Express, MongoDB, TypeScript, Zod for validation, CORS for cross-origin resource sharing, and dotenv for environment configuration.

## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB (v4.x or later)

## Getting Started

### 1. Clone the Repository

git clone https://github.com/MerchantKhalid/BootCampAssign1.git
cd BootCampAssign1

### Install Dependencies
npm install

### Configure Environment Variable

### Start MongoDB

###  Build and Start the Application
npm run build
npm start

### Testing Endpoints
POST /api/orders
- Create a new order

GET /api/orders
- Get all orders

GET /api/orders/email?email=<email> 
- Get orders by email

POST /api/products 
- Create a new product

GET /api/products 
- Get all products
  
GET /api/products?searchTerm=iphone
- search a product

GET /api/products/:productId
- Get product by ID

PUT /api/products/:productId
- Update product by ID

DELETE /api/products/:productId
- Delete product by ID

### Additional Notes
- Customize the .env file for different configurations (e.g. database URI, server port).
- Ensure MongoDB is running before starting the application.

### Troubleshooting
- Verify MongoDB is running and accessible.
- Check dependencies (npm install).
- Review .env file for correct configurations.
