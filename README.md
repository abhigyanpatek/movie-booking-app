# Movie Booking App

## Overview
The **Movie Booking App** is a web application for managing theatres, movies, and ticket bookings. It supports CRUD operations, a booking and payment system, and real-time notifications.

## Features

- **Manage Theatres and Movies**
  - Create, update, and delete theatre and movie information.

- **Booking and Payment System**
  - Book and cancel tickets.
  - Handle payment timeouts.

- **Real-Time Notifications**
  - Notify theatre owners about changes.
  - Update users on payment status.

## Live Demo
Access the app here: [Movie Booking App](https://movie-booking-app-tpx5.onrender.com)

## Getting Started

### Prerequisites
- **Node.js**
- **MongoDB**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/abhigyanpatek/movie-booking-app.git
   ```
2. Navigate to the project folder:
   ```bash
   cd movie-booking-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables
Create a `.env` file and add:
```env
PORT=3000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
NOTIFICATION_API_KEY=your-notification-service-api-key
```

### Run the App
Start the server:
```bash
npm start
```
Visit `http://localhost:3000` to access the app.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Notifications**: External notification service

## Contributing
1. Fork the repo.
2. Create a branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m 'Add feature-name'`.
4. Push changes: `git push origin feature-name`.
5. Open a pull request.

Try it out: [Movie Booking App](https://movie-booking-app-tpx5.onrender.com)
