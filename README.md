# User Management API

A complete REST API for user management built with **Node.js, Express.js, MySQL**, and **Sequelize ORM**.

## Features

* Create, Read, Update, Delete (CRUD) operations for users
* Input validation and error handling
* MySQL database integration using **Sequelize ORM**
* Database connection pooling for optimized performance
* RESTful API design
* Security middleware (Helmet, CORS)
* Request logging
* Clean folder structure and proper error handling

## Prerequisites

* Node.js
* MySQL
* npm or yarn

## Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd user-management
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=user_management
DB_PORT=3000
```

4. **Set up MySQL database**

```sql
CREATE DATABASE user_management;
```

5. **Start the server**

**Development mode (with auto-restart)**

```bash
npm run dev
```

**Production mode**

```bash
node app.js
```

---

## API Endpoints

### Base URL

```
http://localhost:3000/api/users
```

### 1. Create User

**POST** `/api/users`

**Request Body:**

```json
{
  "name": "Nish",
  "email": "Nish29@example.com",
  "phone": "0987654321"
}
```

**Response:**

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": 1,
    "name": "Nish",
    "email": "Nish29@example.com",
    "phone": "0987654321",
    "created_at": "2025-08-17T04:57:14.096Z",
    "updated_at": "2025-08-17T04:57:14.096Z"
  }
}
```

### 2. Get All Users

**GET** `/api/users`

**Response:**

```json
{
  "success": true,
  "message": "Users retrieved successfully",
  "data": [...],
  "count": 1
}
```

### 3. Get User by ID

**GET** `/api/users/:id`

**Response:**

```json
{
  "success": true,
  "message": "User retrieved successfully",
  "data": { ... }
}
```

### 4. Update User

**PUT** `/api/users/:id`

**Request Body:**

```json
{
  "name": "Nishmitha",
  "email": "Nishmitha@gmail.com"
}
```

**Response:**

```json
{
  "success": true,
  "message": "User updated successfully",
  "data": { ... }
}
```

### 5. Delete User

**DELETE** `/api/users/:id`

**Response:**

```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

---

## Validation Rules

### User Creation

* **name**: Required, 2-100 characters
* **email**: Required, valid email format, unique
* **phone**: Optional, 10-20 characters, valid phone format

### User Update

* **name**: Optional, 2-100 characters
* **email**: Optional, valid email format, unique
* **phone**: Optional, 10-20 characters, valid phone format

---

## Error Responses

**Validation Error (400)**

```json
{ "success": false, "message": "Validation failed", "errors": [...] }
```

**Not Found (404)**

```json
{ "success": false, "message": "User not found" }
```

**Conflict (409)**

```json
{ "success": false, "message": "Email already exists" }
```

**Internal Server Error (500)**

```json
{ "success": false, "message": "Internal server error" }
```

---

## Project Structure

```
user-management-api/
├── config/
│   └── db.js                # Database configuration with Sequelize and connection pool
├── controllers/
│   └── userController.js    # Request handlers
├── middleware/
│   ├── errorHandler.js      # Global error handling
│   └── validation.js        # Input validation
├── routes/
│   └── userRoutes.js        # API routes
├── services/
│   └── userService.js       # Business logic
├── .env                     # Environment variables
├── package.json             # Dependencies
├── README.md                # Documentation
└── app.js                   # Main application file
```

---

## Testing the API

You can test the API using tools like **Postman**:

```bash
# Create a user
POST http://localhost:3000/api/users 

# Get all users
GET http://localhost:3000/api/users

# Get user by ID
GET http://localhost:3000/api/users/1

# Update user
PUT http://localhost:3000/api/users/1 

# Delete user
DELETE http://localhost:3000/api/users/1
```

---

## License

This project is licensed under the MIT License.
