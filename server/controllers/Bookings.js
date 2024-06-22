import Bookings from "../models/BookingModel.js";
import Users from "../models/UserModel.js";
import { Op } from "sequelize";

export const getBooking = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Bookings.findAll({
        attributes: ["booking_date", "start_time", "end_time", "price", "status"],
        include: [
          {
            model: Users,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Bookings.findAll({
        attributes: ["status", "price"],
        where: {
          user_id: req.userId,
        },
        include: [
          {
            model: Users,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//
export const getBookingById = async (req, res) => {
  try {
    const booking = await Bookings.findOne({
      where: {
        user_id: req.params,
      },
    });
    if (!booking) return res.status(404).json({ msg: "Data tidak ditemukan" });
    let response;
    if (req.role === "admin") {
      response = await Bookings.findOne({
        attributes: ["booking_id", "booking_date", "start_time", "end_time", "price", "status"],
        where: {
          booking_id: booking.id,
        },
        include: [
          {
            model: Users,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Bookings.findOne({
        attributes: ["status", "price"],
        where: {
          [Op.and]: [{ booking_id: booking.id }, { user_id: req.params }],
        },
        include: [
          {
            model: Users,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createBooking = async (req, res) => {
  const { field_id, booking_date, start_time, end_time, price, status } = req.body;
  try {
    await Bookings.create({
      field_id: field_id,
      booking_date: booking_date,
      start_time: start_time,
      end_time: end_time,
      price: price,
      status: status,
      user_id: req.userId,
    });
    res.status(201).json({ msg: "Bookings Created Successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateBooking = async (req, res) => {
  try {
    const booking = await Bookings.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!booking) return res.status(404).json({ msg: "Data tidak ditemukan" });
    const { name, price } = req.body;
    if (req.role === "admin") {
      await Bookings.update(
        { name, price },
        {
          where: {
            id: booking.id,
          },
        }
      );
    } else {
      if (req.user_id !== booking.user_id) return res.status(403).json({ msg: "Akses terlarang" });
      await Bookings.update(
        { name, price },
        {
          where: {
            [Op.and]: [{ id: booking.id }, { user_id: req.user_id }],
          },
        }
      );
    }
    res.status(200).json({ msg: "Product updated successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const booking = await Bookings.findOne({
      where: {
        user_id: req.params.id,
      },
    });
    if (!booking) return res.status(404).json({ msg: "Data tidak ditemukan" });
    const { name, price } = req.body;
    if (req.role === "admin") {
      await Bookings.destroy({
        where: {
          id: booking.id,
        },
      });
    } else {
      if (req.user_id !== booking.user_id) return res.status(403).json({ msg: "Akses terlarang" });
      await Bookings.destroy({
        where: {
          [Op.and]: [{ id: booking.id }, { user_id: req.user_id }],
        },
      });
    }
    res.status(200).json({ msg: "Product deleted successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
