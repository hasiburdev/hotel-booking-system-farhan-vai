import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getFeaturedHotel,
  getHotelBySearch,
  getHotelCount,
  getSingleHotel,
  updateHotel,
} from "../controllers/hotelController.js";

import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
// router.get("/", (req,res)=>{
// res.send("Hello,this is auth")
// })
//create new room
// router.get("/register", (req,res)=>{
// res.send("Hello,this is auth register")
// })

//create hotel
router.post("/", verifyAdmin, createHotel);
//update hotel
router.put("/:id", verifyAdmin, updateHotel);
//delete hotel
router.delete("/:id", verifyAdmin, deleteHotel);
//getSingle hotel
router.get("/:id", getSingleHotel);
//getAll hotel
router.get("/", getAllHotel);
//get all hotels by search
router.get("/search/getHotelBySearch", getHotelBySearch);
router.get("/search/getFeaturedHotels", getFeaturedHotel);
router.get("/search/getHotelCount", getHotelCount);

export default router;
