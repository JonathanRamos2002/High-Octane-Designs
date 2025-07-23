import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import rateLimiter from './middleware/rateLimiter.js'; // Import the rate limiter
import notesRoutes from './routes/notesRoutes.js';
import connectDB from './config/db.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();
console.log(`Server running in ${process.env.NODE_ENV} mode`);
console.log(__dirname);

if (process.env.NODE_ENV !== 'production') {
  // Enable CORS
  app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));
}

// Simple custom logging middleware (common use case: authentication + rate limiting)
// app.use((req, res, next) => {
//   console.log("We just got a request!");
//   console.log(`Request method is ${req.method} & Request URL is ${req.url}`);
//   next();
// });

// Middleware to parse JSON requests (req.body)
app.use(express.json());

// Apply the rate limiter middleware
app.use(rateLimiter);

// Define routes
app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV === 'production') {
  // Serve static files from the React frontend app
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get('/*path', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  });
};

// Connect to the database first, then start the server
// This ensures that the server only starts if the database connection is successful
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});