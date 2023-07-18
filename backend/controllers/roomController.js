import Room from "../models/Room.js";

//
export const createRoom = async (req, res) => {
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedRoom,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create Try again later",
    });
  }
};

//update room
export const updateRoom = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedRoom,
    });
  } catch (err) {}
};
//delete room
export const deleteRoom = async (req, res) => {
  const id = req.params.id;
  try {
    await Room.findByIdAndUpdate(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to Delete",
    });
  }
};
//getSingle room
export const getSingleRoom = async (req, res) => {
  const id = req.params.id;
  try {
    const room = await Room.findByIdAndUpdate(id);

    res.status(200).json({
      success: true,
      message: "Successfully Found",
      data: room,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};
//getAll room
export const getAllRoom = async (req, res) => {
  //pagination
  const page = parseInt(req.query.page);
  try {
    const rooms = await Room.find({})
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: rooms.length,
      message: "Successfull",
      data: rooms,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};
