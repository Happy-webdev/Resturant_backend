import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = mongoose.Schema({
  firstName:{
    type: String,
    required: true,
    minLength: [3,"First name should be at least 3 characters"],
    maxLength: [25,"First name cannot exceed 25 characters"],
  },
  lastName:{
    type: String,
    required: true,
    minLength: [3,"Last name should be at least 3 characters"],
    maxLength: [25,"Last name cannot exceed 25 characters"],
  },
  phone:{
    type: String,
    required: true,
    minLength: [10,"Phone number should be at least 10 digits"],
    maxLength: [13,"Phone number should be at most 13 digits"],
  },
  email:{
    type: String,
    required: true,
    validate: [validator.isEmail,"Provide a valid email"]
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
