const express = require("express"); //Import the Express.js framework
const cors = require("cors"); // Import the CORS middleware
const morgan = require("morgan"); // Import the Morgan middleware for logging

const authRoutes = require("./routes/auth"); // Import the cars router module
const { NotFoundError } = require("./utils/errors"); //Import error handling

const app = express();
const { PORT } = require("./config");

app.use(cors()); // Enable CORS middleware to handle cross-origin requests
app.use(morgan("dev")); // Use Morgan middleware with 'dev' format for request logging
app.use(express.json()); // Parse incoming requests with JSON payloads

app.use("/", authRoutes);

/* Handle all 404 errors that weren't matched by a route */
app.use((req, res, next) => {
  return next(new NotFoundError());
});

/* Generic error handler - anything that is unhandled will be handled here */
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message;

  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
