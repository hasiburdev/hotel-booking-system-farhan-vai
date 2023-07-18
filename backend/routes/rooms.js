import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRoom,
  getSingleRoom,
  updateRoom,
} from "../controllers/roomController.js";
const router = express.Router();
// router.get("/", (req,res)=>{
// res.send("Hello,this is auth")
// })
//create new room
// router.get("/register", (req,res)=>{
// res.send("Hello,this is auth register")
// })

//create room
router.post("/", createRoom);
//update room
router.put("/:id", updateRoom);
//delete hotel
router.delete("/:id", deleteRoom);
//getSingle hotel
router.get("/:id", getSingleRoom);
//getAll hotel
router.get("/", getAllRoom);

export default router;
