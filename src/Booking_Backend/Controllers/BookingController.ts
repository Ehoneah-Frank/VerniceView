import { Request, Response } from "express";
import Booking from "../Models/Booking";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ success: true, booking });
  } catch {
    res.status(500).json({ success: false });
  }
};

export const getBookings = async (res: Response) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ success: true, bookings });
  } catch {
    res.status(500).json({ success: false  });
  }
};


// error: error.message