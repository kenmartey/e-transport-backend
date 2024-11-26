import { Router } from 'express'
import { createUserProfileController, getUserProfileDetailController, updateBookingDetailController} from '../controllers/userProfile.controller.js'
const router = Router()

// router
// Create new user Profile
router.post("/create", async (req, res) => {
    const { name, age, phone_number } = req.body
    if (!name || !age || !phone_number) {
        res.status(418).send({ message: "All fields are compulsory" })
    }
    try {
        const userProfile = await createUserProfileController(req, res)
        if (userProfile.status === 400) {
            res.status(400)
        }
        res.json(userProfile)
    } catch (error) {
        res.status(500).send({ message: error })
    }
})

router.route("/:profileId") // Refactored this to combine diff routes with the same userId as parameter
.get(async (req, res) => {
    const profileId = req.params.profileId // getting the parameter
    try {
        const profile = await getUserProfileDetailController(profileId)
        console.log(profile)
        if (booking.status === 400) {
            res.status(400)
        }
        res.json(profile)
    } catch (error) {
        res.status(500).send({ message: error })
    }
})
.put(async (req, res) => {
    const profileId = req.params.profileId // getting the parameter
    
    try {
        const profile = await updateBookingDetailController(profileId, req)
        if (profile.status === 400) {
            res.status(400)
        }
        res.json(profile)
    } catch (error) {
        res.status(500).send({ message: error })
    }
})
.delete((req, res) => {
    const profileId = req.params.profileId // getting the parameter
    res.json({message: "Delete Booking Detail With Booking Id"})
})

export default router