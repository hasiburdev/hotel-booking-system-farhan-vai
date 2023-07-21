import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    UserId: {
      type: String,
    },
    userEmail: {
      type: String,
      // required: true,
    },
    hotelName: {
      type: String,
      required: true,
    },
    guestSize: {
      type: Number,
      required: true,
    },

    bookAt: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentId: {
      type: String,
      required: true,
    },
    receipt_url: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
