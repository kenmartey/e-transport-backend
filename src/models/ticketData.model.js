import { Schema, model } from 'mongoose';

const ticketDataSchema = Schema(
    {
        origin: {
            type: String,
            required: true,
        },
        destination: {
            type: String,
            required: true,
        },
        bus_type: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        estimated_time_of_arrival: {
            type: String,
            required: false,
        },
        no_of_seats: {
            type: Number,
            required: false,
        }
    },
    {
        timestamps: true,
    }
);


/**
 * @typedef TicketData
 */
const ticketData = model('TicketData', ticketDataSchema);

export default ticketData;