import mongoose, { Document, Schema } from "mongoose";

interface IBooking extends Document {
  bookingType: "stay" | "event";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkInDate?: Date;
  checkOutDate?: Date;
  roomType?: string;
  guests?: number;
  eventType?: string;
  eventDate?: Date;
  attendees?: number;
  specialRequests?: string;
}

const bookingSchema = new Schema<IBooking>({
  bookingType: { type: String, required: true, enum: ["stay", "event"] },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  checkInDate: Date,
  checkOutDate: Date,
  roomType: String,
  guests: Number,
  eventType: String,
  eventDate: Date,
  attendees: Number,
  specialRequests: String,
});

const Booking = mongoose.model<IBooking>("Booking", bookingSchema);

export default Booking;
