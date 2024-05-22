# API Server Application  ( E-commerce )

##  Introduction

This project is an advanced E-commerce API designed to handle the complexities of modern online shopping platforms. Built with Express.js and TypeScript, this API integrates MongoDB using Mongoose for robust data management. It ensures data integrity and adherence to data schemas through validation using Zod. The API supports comprehensive CRUD operations for both products and orders, providing a solid foundation for any e-commerce application.

##  Technology

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Zod](https://zod.dev/)

##  Features :

###  Product Management

-  Create a New Product
-  Retrieve All Products
-  Retrieve Specific Product by ID
-  Update Product Information
-  Delete a Product
-  Search for Products

###  Order Management

- Create a New Order
- Retrieve All Orders
- Retrieve Orders by User Email

##  Quick Start


Follow these steps to set up the project locally on your device.

### Required :

Make sure you have the following installed on your machine:

- [**Node.js**](https://nodejs.org/en) installed (v14 or higher recommended)
- [**MongoDB**](https://www.mongodb.com/) installed 
- [**VSCode**](https://code.visualstudio.com/)  code editor  
- [**TypeScript**](https://www.typescriptlang.org/) installed
- [**npm**](https://www.npmjs.com/) installed

###  Clone the Repository

``
git clone https://github.com/Eshtiaque/Product-Management-Server.git
``
###  Install Dependencies
``
npm install  
``
 <br/> (  if you can't run it then install npm globally)

###  Configure Environment Variables

Create a .env file in the root of the project and add the following environment variables:

``
PORT=5000 
``
<br/>
``
DB_URI="setup your Mongo address"
``
###  Compile TypeScript
``
npm run build
``
###  Start the Application
``
npm run start:dev
``

##  Contact

If you have any questions or need further assistance, please contact est.ahmed111@gmail.com.

---