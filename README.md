# 🛒 SkyMart

SkyMart is a modern e-commerce web application built with React, Vite, and React Router. It provides a seamless shopping experience with product browsing, product details, authentication, protected routes, cart management, and responsive UI design.

## 🚀 Features

- 🔐 User Authentication (Login & Registration)
- 🛡️ Protected Routes
- 🏠 Modern Home Page
- 🛍️ Product Listing & Shop Page
- 🔎 Product Search & Filtering
- 📄 Product Details Page
- 🛒 Shopping Cart Functionality
- 📱 Fully Responsive Design
- 🔔 Toast Notifications
- ⚡ Fast Performance with Vite
- 🎨 Modern UI with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router
- Tailwind CSS
- React Toastify
- Lucide React Icons

### State Management
- React Context API

### API
- DummyJSON Products API

---

## 📂 Project Structure

```text
skymart/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── layout/
│   ├── pages/
│   ├── routes/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── vercel.json
```

---

## ⚙️ Installation

### Clone the repository

```bash
https://github.com/Gosavilatikesh/Cohort-3.0-Task-10.git
```

### Navigate to project folder

```bash
cd skymart
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Application will run at:

```text
http://localhost:5173
```

---

## 🔑 Authentication Flow

### Public Routes

- `/`
- `/register`

### Protected Routes

- `/main`
- `/main/shop`
- `/main/shop/:id`
- `/main/about`

Users must be authenticated to access protected pages.

---

## 🛒 Shopping Features

- Browse products
- Search products
- Filter by category
- Sort products
- View product details
- Add products to cart
- Update quantity
- Remove items from cart
- View cart total

---

## 🌐 Deployment

The project is deployed on Vercel.

### Vercel Routing Configuration

Create a `vercel.json` file in the project root:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures React Router routes work correctly when users refresh the page.

---

## 📜 Available Scripts

### Run Development Server

```bash
npm run dev
```

### Build Project

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Lint

```bash
npm run lint
```

---

## 📸 Screenshots

Add screenshots of:

- Home Page
- Shop Page
- Product Details Page
- Cart Sidebar
- Login Page
- Registration Page

---

## 🔮 Future Enhancements

- Wishlist Functionality
- Order Management
- Payment Gateway Integration
- User Profile Management
- Product Reviews
- Backend Integration
- Admin Dashboard

---

## 👨‍💻 Author

**Latikesh**

Built as part of a React + Vite learning project focused on modern frontend development and routing.

---

## 📄 License

This project is licensed under the MIT License.
