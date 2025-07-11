# 🔐 Role-Based Access Control System

![RBAC Banner](https://img.shields.io/badge/RBAC-System-blue?style=for-the-badge)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=flat-square&logo=json-web-tokens)](https://jwt.io/)

## 📋 Overview

The Role-Based Access Control (RBAC) System is a comprehensive full-stack application built with **Node.js/Express** (backend) and **React** (frontend) that implements a secure authentication and authorization framework using **JWT tokens** and HTTP-only cookies. The system features distinct user roles (`ADMIN` and `USER`) that determine access permissions throughout the application, where administrators can manage users and content through dedicated dashboards while regular users interact with content based on their restricted permissions. The architecture follows best practices with middleware-based route protection, MongoDB data persistence, RESTful API design, and a responsive UI that adapts to all device sizes, making it an ideal reference implementation for secure, scalable web applications that require different levels of access control.

![Demo Screenshot](https://via.placeholder.com/800x400?text=RBAC+System+Screenshot)

## ✨ Key Features

- **🔒 Secure Authentication**: JWT-based authentication with HTTP-only cookies
- **👥 Role-Based Authorization**: Middleware protection for sensitive routes
- **📊 Admin Dashboard**: Complete user and blog post management
- **🛡️ Protected Routes**: Dynamic UI based on user roles
- **📱 Responsive Design**: Works seamlessly across all devices
- **🎨 Modern UI**: Clean, intuitive interface with consistent styling

## 🚀 Getting Started

### Prerequisites
- Node.js and npm
- MongoDB (local or Atlas)
- Git

### Running the Application

#### 1️⃣ Server Setup
```bash
# Navigate to server directory
cd Role-Based-Access-Control-System-server

# Install dependencies
npm install

# Create test users (optional)
node scripts/seedUsers.js

# Start the server
npm start
```
> Server will run on port 5000

#### 2️⃣ Client Setup
```bash
# Navigate to client directory
cd Role-Based-Access-Control-System-client

# Install dependencies
npm install

# Start the client
npm start
```
> Client will run on port 3000 and open in your default browser

## 🔑 User Authentication

### Sign Up
1. Navigate to http://localhost:3000/signup
2. Fill in your name, email, and password
3. Click "Sign Up"
4. You'll be registered as a regular USER by default

### Login
1. Navigate to http://localhost:3000/login
2. Enter your email and password
3. Click "Login"

### Test Accounts
Before using these accounts, run the seed script:

```bash
cd Role-Based-Access-Control-System-server
node scripts/seedUsers.js
```

After running the script, you can use these pre-configured accounts:

| Role | Email | Password | Permissions |
|------|-------|----------|-------------|
| **ADMIN** | admin@example.com | admin123 | Full access to user and blog management |
| **USER** | user@example.com | user123 | View blogs and edit profile |

## 🔧 Features by Role

### Admin Users Can:
- 👥 Manage all users (view, update, delete)
- 📝 Create, edit, and delete blog posts
- 🔍 Access admin dashboard at `/admin/users` and `/admin/blogs`

### Regular Users Can:
- 📚 View blog posts
- 👤 Edit their profile information
- 🏠 Access the blogs page and profile page

## 🧭 Navigation

- **Home/Blogs**: View all blog posts
- **Profile**: View and edit your profile
- **Admin Dashboard** (Admin only):
  - User Management
  - Blog Management

## 🎨 UI Design Features

- **📱 Responsive Design**: Optimized for all screen sizes
- **🎯 Role-Based UI Elements**: Dynamic content based on user role
- **✨ Interactive Elements**: Hover effects and animations
- **♿ Accessible Forms**: Clear labels and validation feedback
- **🎭 Consistent Color Scheme**: Professional and modern palette
- **📱 Mobile Navigation**: Collapsible menu for smaller screens
- **👤 Profile Management**: User-friendly profile editing

## 🏗️ Project Structure

```
├── Role-Based-Access-Control-System-client/    # React frontend
│   ├── public/
│   └── src/
│       ├── components/                         # Reusable components
│       ├── pages/                             # Page components
│       └── styles/                            # CSS files
└── Role-Based-Access-Control-System-server/    # Express backend
    ├── constant/                              # Constants and enums
    ├── middleware/                            # Auth middleware
    ├── models/                                # MongoDB models
    ├── routes/                                # API routes
    └── scripts/                               # Utility scripts
```

## 🛠️ Technologies Used

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, bcrypt
- **Others**: CORS, cookie-parser

## 📜 License

This project is licensed under the MIT License.

---

Created with ❤️ by [Aryan Bartwal](https://github.com/AryanBartwal)
