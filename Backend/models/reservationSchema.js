import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain atleast 3 character"],
        maxLength: [30, "First name must contain atmost 30 character"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "last name must contain atleast 3 character"],
        maxLength: [30, "last name must contain atmost 30 character"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide valid mail"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number only contain only 10 digit"],
        maxLength: [30, "Phone number only contain only 10 digit"],
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);