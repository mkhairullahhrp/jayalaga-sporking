import express from "express";
import {
  getBooking,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} from "../controllers/Bookings.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/bookings", verifyUser, getBooking);
router.get("/bookings/:id", verifyUser, getBookingById);
router.post("/bookings", verifyUser, createBooking);
router.patch("/bookings/:id", verifyUser, updateBooking);
router.delete("/bookings/:id", verifyUser, deleteBooking);

export default router;
