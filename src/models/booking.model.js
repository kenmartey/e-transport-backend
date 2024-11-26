import { Schema, model } from 'mongoose';

const bookingSchema = Schema(
    {
        origin: {
            type: String,
            required: true,
        },
        destination: {
            type: String,
            required: true,
        },
        trip_date: {
            type: Date,
            required: false,
        },
        trip_time: {
            type: String,
            required: true,
        },
        full_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: false,
        },
        seat_no: {
            type: Number,
            required: false,
        },
        phone_number: {
            type: String,
            required: false,
        },
        payment_method: {
            type: String,
            required: false,
        },
        amount: {
            type: Number,
            required: false,
        },
        bus_type: {
            type: String,
            required: false,
        },
        has_paid: {
            type: Boolean,
            default: false
        },
        transportId: {
            type: String,
            required: false
        },
        userId: {
            type: String,
            required: false
        },
        status: {
            type: String,
            required: false,
            default: "Up Coming"
        }
    },
    {
        timestamps: true,
    }
);


/**
 * @typedef Booking
 */
const Booking = model('Booking', bookingSchema);

export default Booking;