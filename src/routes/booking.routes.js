import { Router } from 'express'
import { createBookingController, getBookingListController, allBookingListController, 
    getBookingDetailController, updateBookingDetailController, searchBookingController, updateBookingStatusController } from '../controllers/booking.controller.js'
import { updateBookingStatusById } from '../services/booking.service.js'
const router = Router()


// router
// Create new booking
router.post("/create", async (req, res) => {
    const { origin, destination, trip_date, trip_time, transportId, full_name, phone_number } = req.body
    if (!origin || !destination || !trip_date || !trip_time || !transportId || !full_name || !phone_number) {
        return res.status(418).send({ message: "All fields are compulsory" })
    }
    try {
        const booking = await createBookingController(req, res)
        if (booking.status === 400) {
         return  res.status(400)
        }
        return  res.status(201).json({status: "success", message: "You have successfully created your Booking", data: booking})
    } catch (error) {
        return res.status(500).send({ message: error })
    }
})

router.get("/all-bookings", async (req, res) => {
    const { userId } = req.body
    
    try {
        const allBookings = await allBookingListController()
        if (allBookings.status === 400) {
            res.status(400)
        }
        return res.status(200).json({status: "success", message: "All Bookings", data: allBookings})
    } catch (error) {
        return res.status(500).send({ message: error })
    }
})


router.post("/my-bookings", async (req, res) => {
    const { userId } = req.body
    
    try {
        const booking = await getBookingListController(userId)
        if (booking.status === 400) {
            res.status(400)
        }
        return res.status(200).json({status: "success", message: "Your Bookings", data: booking})
    } catch (error) {
        return res.status(500).send({ message: error })
    }
})

router.post("/search", async (req, res) => {
    const { origin, destination,  trip_time, bus_type } = req.body
    if (!origin || !destination || !trip_time || !bus_type) {
        return res.status(418).send({ message: "All fields are compulsory" })
    }
    try {
        const booking = await searchookingController(origin, destination,  trip_time, bus_type, res)
        if (booking.status === 400) {
         return  res.status(400)
        }
        return  res.status(201).json({status: "success", message: "You have successfully created your Booking", data: booking})
    } catch (error) {
        return res.status(500).send({ message: error })
    }
})

// Manually Updating Booking by Officer
router.post("/update-booking-status/:bookingId", async (req, res) => {
    const bookingId = req.params.bookingId 
    const { status } = req.body
    if (!status) {
        return res.status(418).send({ message: "Select Booking status" })
    }
    try {
        const booking = await updateBookingStatusController(bookingId, status)
        if (booking.status === 400) {
         return  res.status(400)
        }
        return  res.status(201).json({status: "success", message: "You have successfully changed Booking status", data: booking})
    } catch (error) {
        return res.status(500).send({ message: error })
    }
})

//  Updating Booking by Officer By Scanning QR Code
router.put("/update-booking-status-by-qr-code/:bookingId", async (req, res) => {
    const bookingId = req.params.bookingId
    try {
        const booking = await updateBookingStatusController(bookingId, "On Board")
        if (booking.status === 400) {
         return  res.status(400)
        }
        return  res.status(201).json({status: "success", message: "You have successfully changed Booking status", data: booking})
    } catch (error) {
        return res.status(500).send({ message: error })
    }
})

router.route("/:bookingId") // Refactored this to combine diff routes with the same userId as parameter
.get(async (req, res) => {
    const bookingId = req.params.bookingId // getting the parameter
    try {
        const booking = await getBookingDetailController(bookingId)
        console.log(booking)
        if (booking.status === 400) {
            return res.status(400)
        }
        return res.status(200).json({status: "success", message: "Your Booking detail", data: booking})
    } catch (error) {
        return res.status(500).send({ message: error })
    }
})
.put(async (req, res) => {
    const bookingId = req.params.bookingId // getting the parameter
    try {
        const booking = await updateBookingDetailController(bookingId, req)
        // console.log(booking)
        if (booking.status === 400) {
            return res.status(400)
        }
        return res.status(200).json({status: "success", message: "Your Booking Updated!", data: booking})
    } catch (error) {
        return res.status(500).send({ message: error })
    }
})
.delete((req, res) => {
    const bookingId = req.params.bookingId // getting the parameter
    return res.json({message: "Delete Booking Detail With Booking Id"})
})

export default router