import Booking from "../models/booking.model.js";

/**
 * Create a Booking
 * @param {Object} bookingData
 * @returns {Promise<User>}
 */
export const createBooking = async (bookingData, res) => {
    console.log("FROM CREATE USER SERVICE....", bookingData)
  return Booking.create(bookingData);
};

/**
 * Get Booking List for a user
 * @returns {Promise<User>}
 */
export const allBookingList = async () => {
  return Booking.find();
};


/**
 * Get Booking List for a user
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
export const getBookingList = async (userId) => {
    return Booking.find({userId: userId});
};

/**
 * Get Booking Details
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
export const getBookingById = async (bookingId) => {
    return Booking.findById({_id: bookingId});
  };

/**
 * Get Booking Details
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
export const getBookingByIdAndUpdate = async (bookingId, bookingData) => {
    // console.log(bookingData)
    return Booking.findOneAndUpdate({_id: bookingId}, {$set: bookingData},{
        new: true
      });
  };

  /**
 * Get Booking Details
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
export const updateBookingStatusById = async (bookingId, status) => {
  // console.log(bookingData)
  return Booking.updateOne({_id: bookingId}, {$set: {status: status}},{
      new: true
    });
};
/**
 * Search Booking List
 * @returns {Promise<User>}
 */
export const bookingListSearchResult = async (origin, destination, trip_time, bus_type) => {
    return Booking.find({origin: origin, destination: destination, trip_time: trip_time, bus_type: bus_type});
  };
