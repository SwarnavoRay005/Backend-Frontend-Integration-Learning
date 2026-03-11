# 🛒 Item Marketplace — Full Stack CRUD App (MERN)

A beginner-friendly full-stack web application where users can list items for sale with image, price, and description. This project demonstrates complete backend–frontend integration from scratch using MongoDB, Express, React, Node.js, Mongoose, and dotenv.

## 🚀 Features

* 📦 Add new items for sale
* 🖼️ Display item image
* 💰 Show item price
* 📝 Item description
* ✏️ Update existing items
* ❌ Delete items
* 🔄 Real-time UI updates after operations
* 🌐 REST API integration
* 🔐 Environment variable support using dotenv

## 🧱 Tech Stack

Frontend: React.js, Axios, CSS
Backend: Node.js, Express.js
Database: MongoDB with Mongoose
Configuration: dotenv

## 🏗️ Project Structure

```
project-root/
├── backend/
│   ├── models/
|   ├── config/
│   ├── routes/
│   ├── controllers/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.js
└── README.md
```

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/item-marketplace.git
cd item-marketplace
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file inside backend folder:

```
PORT=2000
MONGODB_URI=your_mongodb_connection_string
DB_NAME=your_database_name
```

Run backend:

```bash
npm run dev
```

Backend runs on: http://localhost:2000

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on: http://localhost:5173

## 🔗 API Endpoints

Create Item — POST /api/products/create
Get All Items — GET /api/products
Update Item — PATCH /api/products/:id
Delete Item — DELETE /api/products/:id

## 📊 Database Schema (Mongoose)

```js
{
  Name: String,
  Price: Number,
  Image: String
}
```

## 🎯 Learning Goals

* Full-stack application development
* CRUD operations with MongoDB
* REST API design using Express
* Mongoose data modeling
* Environment configuration with dotenv
* Connecting React frontend to backend APIs
* State management for dynamic UI updates

## 🧪 Future Improvements

* User authentication
* Image upload support
* Search and filtering
* Pagination
* Admin panel
* Deployment to cloud platforms

## 👨‍💻 Author

Built as a learning project to understand complete backend–frontend integration using the MERN stack.
