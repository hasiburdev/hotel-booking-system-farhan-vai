import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies?.accessToken ?? req.body?.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "You are not authorized",
    });
  }

  //if  token is exist then verify the token

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, user) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Token is invalid",
      });
    }
    const dbUser = await User.findById(user.id);
    console.log(dbUser);
    req.user = dbUser;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  console.log("USER");
  // verifyToken(req, res, next, () => {
  if (req.user.role === "user" || req.user.role === "admin") {
    next();
  } else {
    return res.status(401).json({
      success: false,
      message: "You are not authenticated",
    });
  }
  // });
};

export const verifyAdmin = (req, res, next) => {
  // verifyToken(req, res, next, () => {
  console.log("ADMIN");
  if (req.user.role === "admin") {
    next();
  } else {
    return res.status(401).json({
      success: false,
      message: "You are not authorized",
    });
  }
  // });
};
