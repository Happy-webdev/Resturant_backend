import ErrorHandler from "../middleware/error.js";
import { Reservation } from "../models/model.js";

export const sendReservation = async (req, res, next) => {
  // if (!req.body || Object.keys(req.body).length === 0) {
  //   return next(new ErrorHandler("Request body is missing", 400));
  // }

  const { firstName, lastName, phone, email, time, date } = req.body;
   console.log("REQUEST BODY:", req.body);  

  if (!firstName || !lastName || !phone || !email || !time || !date) {
    return next(new ErrorHandler("please fill full reservation form", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, phone, email, time, date });
    return res.status(201).json({
      message: "reservation created successfully",
      success: true,
    });
  } catch (error) {
    console.error("Reservation error:", error);
  return next(new ErrorHandler(error.message || "Failed to create reservation", 500));
  }
};

