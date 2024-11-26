import { Schema, model } from 'mongoose';

const seatSchema = Schema({
  seatNumber: {
    type: Number,
    required: true
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
  ticketId: {
    type: String,
    required: true,
  },
});

const Seat = model('Seat', seatSchema);

export default Seat;