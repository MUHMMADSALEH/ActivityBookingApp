# Activity Booking App Backend

A RESTful API backend for an activity booking application built with Node.js, Express.js, and MongoDB.

## Features

- User registration and authentication with JWT
- List public activities
- Book activities (for authenticated users)
- View user's bookings
- Secure password handling with bcrypt
- Input validation with express-validator
- Repository pattern for data access

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/activity-booking
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   JWT_EXPIRES_IN=7d
   NODE_ENV=development
   ```

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
  - Body: `{ name, email, phone, password }`
- `POST /api/auth/login` - Login user
  - Body: `{ email, password }`

### Activities
- `GET /api/activities` - List all activities

### Bookings
- `POST /api/bookings` - Create a new booking (requires authentication)
  - Body: `{ activityId }`
- `GET /api/bookings/me` - Get user's bookings (requires authentication)

## Security Features

- JWT stored in HTTP-only cookies
- Password hashing with bcrypt
- Input validation
- CORS configuration
- Error handling middleware

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── middlewares/    # Custom middlewares
├── models/         # Mongoose models
├── repositories/   # Data access layer
├── routes/         # Route definitions
├── utils/          # Utility functions
├── app.js          # Express app setup
└── server.js       # Server entry point
```

## Postman Collection

A Postman collection is included in the repository (`ActivityBookingApp.postman_collection.json`) for testing the APIs. To use it:

1. Import the collection into Postman
2. Set up the following environment variables:
   - `baseUrl`: Your API base URL (e.g., `http://localhost:3000`)
   - `activityId`: ID of an activity for testing bookings

The collection includes:
- Authentication endpoints (register, login)
- Activities endpoints (list)
- Bookings endpoints (create, list)

Note: The login endpoint will set the JWT token in cookies automatically. Make sure to enable cookies in Postman settings. 