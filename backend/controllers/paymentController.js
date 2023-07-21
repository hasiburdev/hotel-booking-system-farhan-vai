import Stripe from "stripe";
import dotenv from "dotenv";
import Booking from "../models/Booking.js";
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_KEY);
export const payment = async (req, res) => {
  try {
    const response = await stripe.charges.create({
      amount: req.body.amount,
      currency: "usd",
      description: "My First Test Charge (created for API docs)",
      source: req.body.stripeToken.id,
    });
    console.log(response);

    const booking = new Booking({
      userId: req.user._id,
      userEmail: response.billing_details?.name ?? "",
      hotelName: req.body?.hotelName ?? "",
      guestSize: req.body?.guestSize ?? 0,
      bookAt: new Date(),
      amount: response.amount,
      paymentId: response.id,
      receipt_url: response.receipt_url,
    });

    const savedBooking = await booking.save();

    res.status(200).send({
      message: "Payment Successful",
      success: true,
      data: savedBooking,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Payment Failed",
    });
  }
};
