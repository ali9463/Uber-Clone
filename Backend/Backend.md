Uber Clone Backend
==================

This repository contains the backend services for an Uber-like application, built using Node.js, Express, and MongoDB. It handles user authentication, registration, and core data management.

Table of Contents
-----------------

*   [Features](https://www.google.com/search?q=#features)
    
*   [Technologies Used](https://www.google.com/search?q=#technologies-used)
    
*   [Prerequisites](https://www.google.com/search?q=#prerequisites)
    
*   [Getting Started](https://www.google.com/search?q=#getting-started)
    
    *   [1\. Clone the Repository](https://www.google.com/search?q=#1-clone-the-repository)
        
    *   [2\. Install Dependencies](https://www.google.com/search?q=#2-install-dependencies)
        
    *   [3\. Environment Variables](https://www.google.com/search?q=#3-environment-variables)
        
    *   [4\. Database Setup](https://www.google.com/search?q=#4-database-setup)
        
    *   [5\. Run the Application](https://www.google.com/search?q=#5-run-the-application)
        
*   [Project Structure](https://www.google.com/search?q=#project-structure)
    
*   [API Endpoints](https://www.google.com/search?q=#api-endpoints)
    
*   [Error Handling](https://www.google.com/search?q=#error-handling)
    
*   [Contributing](https://www.google.com/search?q=#contributing)
    
*   [License](https://www.google.com/search?q=#license)
    

Features
--------

*   **User Registration:** Securely register new users with email, phone, username, and password.
    
*   **Password Hashing:** Passwords are automatically hashed using bcrypt for security.
    
*   **JWT Authentication:** Users receive a JSON Web Token (JWT) upon successful registration for secure API access.
    
*   **Database Integration:** Uses MongoDB for flexible and scalable data storage.
    
*   **Validation:** Input validation using express-validator to ensure data integrity.
    

Technologies Used
-----------------

*   **Node.js:** JavaScript runtime environment.
    
*   **Express.js:** Web application framework for Node.js.
    
*   **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
    
*   **MongoDB:** NoSQL database.
    
*   **Bcrypt.js:** Library for hashing passwords.
    
*   **jsonwebtoken:** For creating and verifying JSON Web Tokens.
    
*   **express-validator:** Middleware for request data validation.
    
*   **dotenv:** To load environment variables from a .env file.
    
*   **cors:** Node.js package for providing a Connect/Express middleware that can be used to enable CORS.
    

Prerequisites
-------------

Before you begin, ensure you have the following installed on your system:

*   **Node.js:** [Download & Install Node.js](https://nodejs.org/en/download/) (Includes npm)
    
*   **MongoDB:** [Download & Install MongoDB Community Server](https://www.mongodb.com/try/download/community)
    

Getting Started
---------------

Follow these steps to get your Uber Clone Backend up and running on your local machine.

### 1\. Clone the Repository

First, clone this repository to your local machine using Git:

Bash

`   git clone   cd  # e.g., cd Uber-Clone-Backend   `

### 2\. Install Dependencies

Navigate to the project root directory and install all required Node.js packages:

Bash

`   npm install   `

### 3\. Environment Variables

Create a .env file in the root directory of your project. This file will store sensitive information and configuration settings.

`   PORT=3000  MONGO_URI=mongodb://localhost:27017/uberclone  JWT_SECRET=your_jwt_secret_key_here   `

*   **PORT**: The port on which your Express server will run. (e.g., 3000)
    
*   **MONGO\_URI**: Your MongoDB connection string. If you're running MongoDB locally, the example above should work. Otherwise, replace it with your cloud MongoDB Atlas URI or local instance URI.
    
*   **JWT\_SECRET**: A strong, unique secret key for signing your JSON Web Tokens. Generate a long, random string for this.
    

### 4\. Database Setup

Ensure your MongoDB server is running. The application will attempt to connect to the MONGO\_URI specified in your .env file upon startup. If MongoDB isn't running, the server will not start successfully.

*   **Local MongoDB:** If you installed MongoDB locally, you might need to start its service. Refer to MongoDB's official documentation for your operating system.
    
*   **MongoDB Atlas:** If using MongoDB Atlas, ensure your network access is configured to allow connections from your IP address.
    

### 5\. Run the Application

Once all dependencies are installed and environment variables are set, you can start the backend server:

Bash

`   npm start   `

You should see output similar to this:

`   MongoDB connected successfully  Server is running on port 3000   `

The backend server will now be running at http://localhost:3000 (or whatever port you specified in your .env file).

Project Structure
-----------------

The project follows a modular structure to keep the codebase organized and maintainable:

`   Backend/  ├── app.js                   # Main Express application setup  ├── server.js                # Server entry point  ├── db/  │   └── db.js                # MongoDB connection setup  ├── models/  │   └── user.models.js       # Mongoose schema and model for User  ├── controllers/  │   └── user.controllers.js  # Logic for handling user-related requests  ├── routes/  │   └── user.routes.js       # API routes for user operations  └── services/      └── user.services.js     # Business logic for user-related operations   `

API Endpoints
-------------

Currently, the following API endpoint is available:

### User Authentication

*   **POST /users/register**
    
    *   **Description:** Registers a new user.
        
    *   JSON{ "username": "john\_doe", "email": "john.doe@example.com", "phone": "+1234567890", "password": "securepassword123"}
        
    *   JSON{ "user": { "\_id": "65f...", "username": "john\_doe", "email": "john.doe@example.com", "phone": "+1234567890", "socketId": null, "\_\_v": 0 }, "token": "eyJhbGc..."}
        
    *   JSON{ "errors": \[ { "type": "field", "value": "invalid@email", "msg": "Invalid Email", "path": "email", "location": "body" } \]}orJSON{ "message": "Email already registered."}
        

Error Handling
--------------

The application includes basic error handling:

*   **Validation Errors (400 Bad Request):** If request body data does not pass validation rules (e.g., invalid email format, short password), a 400 status code with specific error messages will be returned.
    
*   **Duplicate Entry Errors (409 Conflict):** If you try to register a user with an email that already exists, a 409 status code will be returned.
    
*   **Internal Server Errors (500 Internal Server Error):** For unexpected errors, a generic 500 status code with an error message is returned.
    

