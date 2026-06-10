# 🛡️ Women Safety App with SOS & Live Tracking

## 📌 Overview

Women Safety App is a full-stack web application designed to enhance personal safety by providing instant emergency assistance through SOS alerts, live location tracking, emergency contacts, and real-time notifications.

The application allows users to quickly notify trusted contacts during emergencies and share their live location for immediate assistance.

---

## 🎯 Problem Statement

Many women face safety concerns while traveling, working late, or being alone in unfamiliar locations. In emergency situations, it can be difficult to quickly communicate their location and request help.

This application aims to provide a fast, reliable, and user-friendly emergency response system.

---

## 🚀 Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Password Encryption using bcrypt

### Emergency Contacts

* Add Emergency Contacts
* Edit Contacts
* Delete Contacts
* View Contact List

### SOS Alert System

* One-click SOS Button
* Sends Emergency Alert
* Shares Current GPS Location
* Stores Alert History

### Live Location Tracking

* Real-Time GPS Tracking
* Continuous Location Updates
* Share Live Location with Contacts

### Dashboard

* User Profile
* Quick Actions
* Emergency Contact List
* Alert History
* Location Status

### Additional Features

* Nearby Police Stations
* Nearby Hospitals
* Safety Tips
* Fake Call Feature
* Voice Alert (Future Scope)
* Shake Detection (Future Scope)

---

## 🏗️ System Architecture

Frontend (React.js)

⬇

Backend API (Node.js + Express.js)

⬇

MongoDB Database

⬇

Socket.IO Server for Real-Time Tracking

---

## 🛠️ Technology Stack

### Frontend

* React.js
* React Router
* Axios
* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* JWT
* bcryptjs
* Socket.IO

### Database

* MongoDB
* Mongoose

### APIs

* Geolocation API
* Google Maps API / OpenStreetMap

### Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)



## 📂 Project Structure

```bash
frontend/
│
├── public/
│   ├── logo.png
│   ├── favicon.ico
│   └── images/
│
├── src/
│
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   └── animations/
│   │
│   ├── components/
│   │
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   │
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx
│   │   │   └── Sidebar.css
│   │   │
│   │   ├── SOSButton/
│   │   │   ├── SOSButton.jsx
│   │   │   └── SOSButton.css
│   │   │
│   │   ├── ContactCard/
│   │   ├── AlertCard/
│   │   ├── LocationMap/
│   │   ├── QuickActions/
│   │   ├── Loader/
│   │   └── ProtectedRoute/
│   │
│   ├── pages/
│   │
│   │   ├── Landing/
│   │   │   └── LandingPage.jsx
│   │   │
│   │   ├── Login/
│   │   │   └── Login.jsx
│   │   │
│   │   ├── Signup/
│   │   │   └── Signup.jsx
│   │   │
│   │   ├── Dashboard/
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── Contacts/
│   │   │   └── Contacts.jsx
│   │   │
│   │   ├── LiveTracking/
│   │   │   └── LiveTracking.jsx
│   │   │
│   │   ├── SOSAlerts/
│   │   │   └── SOSAlerts.jsx
│   │   │
│   │   ├── LocationHistory/
│   │   │   └── LocationHistory.jsx
│   │   │
│   │   ├── NearbyHelp/
│   │   │   └── NearbyHelp.jsx
│   │   │
│   │   ├── SafetyTips/
│   │   │   └── SafetyTips.jsx
│   │   │
│   │   ├── Profile/
│   │   │   └── Profile.jsx
│   │   │
│   │   └── Settings/
│   │       └── Settings.jsx
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx
│   │   └── AuthLayout.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── SocketContext.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useLocation.js
│   │   └── useSocket.js
│   │
│   ├── services/
│   │   ├── authService.js
│   │   ├── contactService.js
│   │   ├── sosService.js
│   │   ├── locationService.js
│   │   └── api.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── formatDate.js
│   │
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── package.json
└── vite.config.js




backend/
│
├── src/
│
│   ├── config/
│   │   ├── db.js
│   │   ├── socket.js
│   │   └── cloudinary.js
│   │
│   ├── controllers/
│   │
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── contactController.js
│   │   ├── sosController.js
│   │   ├── locationController.js
│   │   ├── notificationController.js
│   │   └── profileController.js
│   │
│   ├── models/
│   │
│   │   ├── User.js
│   │   ├── Contact.js
│   │   ├── SOSAlert.js
│   │   ├── LocationHistory.js
│   │   ├── Notification.js
│   │   └── SafetyTip.js
│   │
│   ├── routes/
│   │
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── contactRoutes.js
│   │   ├── sosRoutes.js
│   │   ├── locationRoutes.js
│   │   ├── notificationRoutes.js
│   │   └── profileRoutes.js
│   │
│   ├── middleware/
│   │
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   ├── uploadMiddleware.js
│   │   └── rateLimiter.js
│   │
│   ├── services/
│   │
│   │   ├── smsService.js
│   │   ├── emailService.js
│   │   ├── whatsappService.js
│   │   ├── locationService.js
│   │   └── notificationService.js
│   │
│   ├── sockets/
│   │
│   │   ├── locationTracking.js
│   │   └── sosSocket.js
│   │
│   ├── validations/
│   │
│   │   ├── authValidation.js
│   │   ├── contactValidation.js
│   │   └── sosValidation.js
│   │
│   ├── utils/
│   │
│   │   ├── generateToken.js
│   │   ├── sendResponse.js
│   │   ├── logger.js
│   │   └── mapLinkGenerator.js
│   │
│   ├── app.js
│   └── server.js
│
├── uploads/
│   ├── profile-images/
│   ├── recordings/
│   └── emergency-evidence/
│
├── tests/
│   ├── auth.test.js
│   ├── contact.test.js
│   └── sos.test.js
│
├── .env
├── package.json
└── README.md

```

## 📊 Database Design

### User Schema

```bash
{
  name: String,
  email: String,
  password: String,
  phone: String,
  createdAt: Date
}
```

### Emergency Contact Schema

```bash
{
  userId: ObjectId,
  name: String,
  phone: String,
  relationship: String
}
```

### SOS Alert Schema

```javascript
{
  userId: ObjectId,
  latitude: Number,
  longitude: Number,
  alertTime: Date,
  status: String
}
```

### Location History Schema

```javascript
{
  userId: ObjectId,
  latitude: Number,
  longitude: Number,
  timestamp: Date
}
```

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

### Contacts

| Method | Endpoint          |
| ------ | ----------------- |
| POST   | /api/contacts     |
| GET    | /api/contacts     |
| PUT    | /api/contacts/:id |
| DELETE | /api/contacts/:id |

### SOS

| Method | Endpoint         |
| ------ | ---------------- |
| POST   | /api/sos         |
| GET    | /api/sos/history |

### Location

| Method | Endpoint              |
| ------ | --------------------- |
| POST   | /api/location         |
| GET    | /api/location/history |

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/women-safety-app.git
```

```bash
cd women-safety-app
```

---

### Backend Setup

```bash
cd backend
npm install
```

Create .env file

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key
```

Run Backend

```bash
npm start
```

---

### Frontend Setup

```bash
cd frontend

npm install
```

Run Frontend

```bash
npm run dev
```

or

```bash
npm start
```

---

## 📍 How SOS Works

1. User clicks SOS button.
2. Application fetches GPS coordinates.
3. Coordinates are sent to backend server.
4. Alert record is stored in MongoDB.
5. Emergency contacts are notified.
6. Live tracking starts automatically.
7. Contacts can monitor user location in real time.

---

## 🔄 Live Tracking Workflow

User

↓

Geolocation API

↓

Socket.IO

↓

Node.js Server

↓

Emergency Contacts

↓

Live Map Updates

---

## 🔐 Security Features

* JWT Authentication
* Password Hashing
* Protected Routes
* Secure API Access
* Location Permission Validation

---

## 📈 Future Enhancements

* SMS Integration
* WhatsApp Alerts
* AI Risk Prediction
* Voice Activated SOS
* Shake Detection SOS
* Automatic Audio Recording
* Camera Capture on Emergency
* Offline Emergency Mode

---

## 🧪 Testing

### Functional Testing

* Registration Test
* Login Test
* SOS Trigger Test
* Live Tracking Test
* Contact Management Test

### Performance Testing

* API Response Time
* Real-Time Location Updates
* Database Performance

---

## 👨‍💻 Developer

Nitish Kumar

BCA Student

Project: Women Safety App with SOS & Live Tracking

Technology: MERN Stack

---

## 📜 License

This project is developed for educational and academic purposes.

Feel free to modify and improve it according to your requirements.

---

## ⭐ Project Goal

To provide a reliable emergency response platform that enables women to quickly seek help, share their live location, and stay connected with trusted contacts during emergencies.
