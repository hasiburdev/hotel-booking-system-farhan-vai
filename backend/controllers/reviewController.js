import Hotel from "../models/Hotel.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const hotelId = req.params.hotelId;
  const newReview = new Review({ ...req.body , username: req.user.username });
  try {
    const savedReview = await newReview.save();

    // after creating a new review  then  update the  rivews arrays of hotels
    await Hotel.findByIdAndUpdate(hotelId, {
      $push: {
        reviews: savedReview._id,
      },
    });

    res.status(201).json({
      success: true,
      message: "Review submitted",
      data: savedReview,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Review is not submitted",
    });
  }
};

export const getAllReviews = async (req, res) => {
  const hotelId = req.params.hotelId;
  try {
    // reviews = await Review.find({ hotel: hotelId });
    const reviews = await Review.find()
    console.log(reviews);
    res.status(200).json({
      success: true,
      message: "Reviews fetched",
      data: reviews,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Reviews are not fetched",
    });
  }
};
