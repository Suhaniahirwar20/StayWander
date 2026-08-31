# 🏡 StayWander

**StayWander** is a full-stack accommodation and travel platform designed to make discovering and managing stays simple and convenient.

The project provides a modern frontend experience along with a backend that handles authentication, data management, sessions, image uploads, and application logic.

---

## ✨ Features

* 🏠 Browse and explore available stays
* 🔐 User authentication and authorization
* 👤 User account management
* 📝 Create, edit, and manage listings
* ⭐ Review and rating functionality
* 📸 Image upload and cloud storage
* 🔎 Explore stay details
* 🔔 User-friendly notifications
* 📱 Responsive user interface
* 🔒 Session-based authentication
* 🗄️ MongoDB database integration

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* React Router
* Bootstrap
* Axios
* React Icons
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Passport.js
* Express Session
* EJS
* Joi
* Cloudinary
* Multer

---

## 📁 Project Structure

```text
StayWander/
│
├── frontend/
│   ├── public/
│   └── src/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── views/
│   ├── public/
│   ├── utils/
│   ├── app.js
│   ├── middleware.js
│   └── schema.js
│
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Suhaniahirwar20/StayWander.git
cd StayWander
```

---

## 🚀 Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will start using Vite.

---

## 🔧 Backend Setup

Open another terminal and navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add the required environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
```

Then start the backend server using the project's configured entry point.

> **Note:** Never commit your `.env` file or private credentials to GitHub.

---

## 🗄️ Database

StayWander uses **MongoDB** for storing application data and **Mongoose** for database modeling and interaction.

---

## ☁️ Image Storage

The application uses **Cloudinary** for handling and storing uploaded images.

---

## 🔐 Authentication

Authentication is implemented using:

* Passport.js
* Passport Local
* Express Session
* Passport Local Mongoose

This provides session-based user authentication and protected application functionality.

---

## 📸 Screenshots

*Add screenshots of the application here.*

Example:

```text
screenshots/
├── home.png
├── listings.png
├── listing-details.png
├── login.png
└── dashboard.png
```

You can then display them using:

```markdown
![StayWander Home](screenshots/home.png)
```

---

## 🎯 Project Goals

The main goal of StayWander is to build a practical full-stack web application while working with:

* Frontend development
* RESTful backend architecture
* Database management
* Authentication and authorization
* Image handling
* API integration
* Responsive UI development

---

## 🔮 Future Improvements

* Advanced search and filtering
* Location-based search
* Online booking and reservation system
* Payment integration
* Improved recommendation system
* Wishlist functionality
* Enhanced user dashboard
* Deployment with production-ready configuration

---

## 👩‍💻 Author

**Suhani Ahirwar**

Computer Science Engineering Student

* GitHub: [Suhaniahirwar20](https://github.com/Suhaniahirwar20)

---

## ⭐ Show Your Support

If you found this project interesting, consider giving the repository a ⭐ on GitHub.
