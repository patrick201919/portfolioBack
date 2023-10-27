import express from "express";
import cors from "cors";
import { sanitizeMiddleware } from "./src/middlewares/sanitize.middleware.js";
import { sendEmailHandler } from "./src/EmailRoutes.js";
import { DOMAIN } from "./constant.js";

const PORT = process.env.PORT || 4003;

// CORS middleware to allow requests from the frontend
const app = express();
app.use(express.json());
app.use(cors({ origin: `https://${DOMAIN}` })); // Enable CORS for all routes

app.post("/send-email", sanitizeMiddleware, sendEmailHandler);

// Server startup
app.listen(PORT, () => {
  console.log(`Server running Port ${PORT}`);
});
