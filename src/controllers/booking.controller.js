import  httpStatus from 'http-status';
import {createBooking, getBookingList, allBookingList, getBookingById, getBookingByIdAndUpdate, bookingListSearchResult, updateBookingStatusById} from '../services/booking.service.js';

export const createBookingController = async (req, res) => {
    console.log("FROM CREATE USER CONTROLLER....", req.body)
    const user = await createBooking(req.body);
    return user
};

export const allBookingListController = async (res) => {
    const allBookings = await allBookingList();
    return allBookings
};

export const getBookingListController = async (userId, res) => {
    const bookingList = await getBookingList(userId);
    return bookingList
};
export const searchBookingController = async (origin, destination, trip_time, bus_type, res) => {
    const bookingSearchResult = await bookingListSearchResult(origin, destination, trip_time, bus_type);
    return bookingSearchResult
};

export const getBookingDetailController = async (bookingId, res) => {
    console.log(bookingId)
    const bookingDetail = await getBookingById(bookingId);
    return bookingDetail
};

export const updateBookingDetailController = async (bookingId, req, res) => {
    console.log(bookingId)
    const updateBooking = await getBookingByIdAndUpdate(bookingId, req.body);
    return updateBooking
};
export const updateBookingStatusController = async (bookingId, status) => {
    const updateBookingStatus = await updateBookingStatusById(bookingId, status);
    return updateBookingStatus
};