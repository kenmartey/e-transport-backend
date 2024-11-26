import { Router } from 'express'
import { createTicketDataController, 
    getTicketDataDetailController, 
    updateTicketDataDetailController, 
    searchTicketDataController,
    allTicketDataController,
    searchTicketDataByBusTypeController } from '../controllers/ticketData.controller.js'
const router = Router()

// router
// Create ticket data
router.post("/create", async (req, res) => {
    const { origin, destination, bus_type, time, price } = req.body
    if (!origin || !destination || !bus_type || !time || !price) {
        res.status(418).send({ message: "All fields are compulsory" })
    }
    try {
        const ticketData = await createTicketDataController(req, res)
        if (ticketData.status === 400) {
            return res.status(400)
        }
        return res.status(201).json({ status: 'success', message: "List of Ticket Data Results", data: ticketData })
    } catch (error) {
        return res.status(500).send({ message: error })
    }
})

router.get("/all-ticket-data", async (req, res) => {
    
    try {
        const allTicketData = await allTicketDataController()
        if (allTicketData.status === 400) {
            res.status(400)
        }
        return res.status(200).json({status: "success", message: "All Ticket Data.", data: allTicketData})
    } catch (error) {
        return res.status(500).send({ message: error })
    }
})

router.post("/search", async (req, res) => {
    const { origin, destination, time } = req.body
    if (!origin || !destination || !time) {

        res.status(418).send({ message: "All fields are compulsory" })
    }
    try {

        const ticketData = await searchTicketDataController(origin, destination, time, res)
        if (ticketData.status === 400) {
            res.status(400)
        }
        // res.json(ticketData)
        res.status(200).json({ status: 'success', message: "List of Ticket Data Results", data: ticketData })
    } catch (error) {
        res.status(500).send({status: 'error', message: error })
    }
})

// Only to reveal the price and other details
router.post("/search-by-bus-type", async (req, res) => {
    const { origin, destination, bus_type } = req.body
    if (!origin || !destination || !bus_type) {
        return res.status(418).send({ message: "All fields are compulsory" })
    }
    try {

        const ticketData = await searchTicketDataByBusTypeController(origin, destination, bus_type, res)
        console.log(ticketData)
        if (ticketData.status === 400) {
            return res.status(400)
        }
        // res.json(ticketData)
        return res.status(200).json({ status: 'success', message: "List of Ticket Data Results", data: ticketData })
    } catch (error) {
        return res.status(500).send({status: 'error', message: error })
    }
})



router.route("/:ticketId") // Refactored this to combine diff routes with the same userId as parameter
    .get(async (req, res) => {
        const ticketId = req.params.ticketId // getting the parameter
        try {
            const ticketDataDetail = await getTicketDataDetailController(ticketId)
            // console.log("Ticket Data Detail", ticketDataDetail)
            // if (ticketDataDetail.status === 400) {
            //     res.status(400)
            // }
            return res.status(200).json({ status: 'success', message: "Ticket Data Detail", data: ticketDataDetail })
        } catch (error) {
            res.status(500).send({ message: error })
        }
    })
    .put(async (req, res) => {
        const ticketId = req.params.ticketId // getting the parameter

        try {
            const profile = await updateTicketDataDetailController(ticketId, req)
            if (profile.status === 400) {
                res.status(400)
            }
            res.json(profile)
        } catch (error) {
            res.status(500).send({ message: error })
        }
    })
    .delete((req, res) => {
        const ticketId = req.params.ticketId // getting the parameter
        res.json({ message: "Delete Booking Detail With Booking Id" })
    })

export default router