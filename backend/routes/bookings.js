import express from "express";
import {
  createBooking,
  deleteBooking,
  getAllBooking,
  getBooking,
} from "../controllers/bookingController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.post("/", verifyUser, createBooking);
// router.get("/:id", verifyUser, getBooking);
router.get("/", getAllBooking);
router.post("/delete/:id", verifyToken, verifyUser, deleteBooking);

export default router;
