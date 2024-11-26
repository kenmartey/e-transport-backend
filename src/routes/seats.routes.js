
import { Router } from 'express'
import { createSeatsController, getSeatsByticketIdController } from '../controllers/seats.controller.js'
import Seat from '../models/seats.model.js';
const router = Router()

// Endpoint to get seats for a specific trip
router.get('/:ticketId', async (req, res) => {
    const ticketId  = req.params.ticketId
    try {
        const seats = await getSeatsByticketIdController(ticketId);
        if (seats.status === 400){
        res.status(400).send({ status: "error", message: 'Seats not found' });
        } else {
        res.status(200).send({ status: "success", message: 'Available Seats for your trip ', data: seats });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Endpoint to create number of seat
router.post('/create', async (req, res) => {
    const { ticketId, noOfSeats } = req.body;
    try {
        const seats = await createSeatsController(ticketId, noOfSeats);
        if (seats.status === 400) {
            return res.status(400).send({ status: "error", message: 'Seats cannot be created' })
        } else {
            res.status(200).send({ status: "success", message: 'Seat created successfully', data: seats });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Endpoint to book a seat
router.post('/book', async (req, res) => {
    const { seatNumber, ticketId } = req.body;
    try {
        const seat = await Seat.findOne({ seatNumber, ticketId });
        if (seat && !seat.isBooked) {
            seat.isBooked = true;
            await seat.save();
            res.status(200).send({ status: "success", message: 'Seat booked successfully'});
        } else {
            res.status(400).send({ status: "duplicate", message: 'Seat is already booked or invalid seat number'});
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Endpoint to reset seat booking (for testing purposes)
router.post('/reset', async (req, res) => {
    try {
        await Seat.updateMany({ ticketId: req.body.ticketId }, { isBooked: false });
        res.status(200).send({ status: "success", message: 'Seats reset successfully'});
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message});
    }
});

export default router