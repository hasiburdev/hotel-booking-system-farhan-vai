import express from "express";
import { verifyUser } from "../utils/verifyToken.js";
import { createReview } from "../controllers/reviewController.js";

const router = express.Router();

router.post("/:hotelId", verifyUser, createReview);

export default router;
