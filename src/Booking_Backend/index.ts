import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./Config/db";
import bookingRoutes from "./Routes/BookingRoute";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api", bookingRoutes);

// Connect to DB and start server
connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
