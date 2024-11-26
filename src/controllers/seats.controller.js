import { createSeats, getSeatsByticketId } from "../services/seats.service.js";

// Get Seats for specific Trip Controller
export const createSeatsController = async (ticketId, noOfSeats) => {
    const seatsList = [];
    for (let i = 1; i <= noOfSeats; i++) {
        seatsList.push({ seatNumber: i, isBooked: false, ticketId });
    }
    const seats = await createSeats(seatsList)
    return seats
};

// Get Seats for specific Trip Controller
export const getSeatsByticketIdController = async (ticketId) => {
    const seats = await getSeatsByticketId(ticketId);
    return seats
};

// export const testEndpoint = async () => {
//     console.log("Hello")
// }