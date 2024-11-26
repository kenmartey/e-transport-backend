import Seat from "../models/seats.model.js";

/**
 * Search Booking List
 * @returns {Promise<User>}
 */
export const createSeats = async (seats) => {
    return Seat.insertMany(seats);
  };

/**
 * Search Seats by Trip Id
 * @returns {Promise<User>}
 */
export const getSeatsByticketId = async (ticketId) => {
    return Seat.find({ticketId: ticketId, isBooked: false});
  };