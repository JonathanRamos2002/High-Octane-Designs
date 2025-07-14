import ratelimit from "../config/upstash.js";


const rateLimiter = async (req, res, next) => {
  // per user , we need a user identifier, therefore we need user authentication
  // for now, we will use a static key for testing purposes
  // in production, you would use req.user.id or similar to identify the user
  try {
    const { success } = await ratelimit.limit("my-limit-key"); // update with user identifier req.user.id or similar

    if (!success) {
      return res.status(429).json({ message: 'Too many requests, please try again later.' });
    }

    next();
  } catch (error) {
    console.error('Rate limiter error:', error);
    // Handle error appropriately, e.g., log it and return a 429 status
    next(error); // Pass the error to the next middleware
  }
};


export default rateLimiter;