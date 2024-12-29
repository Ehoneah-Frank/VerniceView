import express from "express";
import { createBooking, getBookings } from "../Controllers/BookingController";

const router = express.Router();

router.post("/bookings", createBooking);
router.get("/bookings", getBookings);

export default router;
