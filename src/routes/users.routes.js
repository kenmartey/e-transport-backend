import { Router } from 'express'
import userController from '../controllers/user.controller.js'
const router = Router()
// router.get("/", (req, res) => {
   
//     res.json({message: "Users List"})
// })

// router
// Register new users
router.post("/create-account", async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        return res.status(418).send({message: "Email or Password can't be empty"})
    }
    try {
         const user = await userController.createUser(req, res)
    if (user.status === 400){
        // res.status(400)
    return res.status(400).json({ status: 'Duplicate', message: "Email already exists"})

    }
    // res.json(user)
    return res.status(201).json({ status: 'success', message: "User Sign up successful", data: user })
    } catch (error) {
        return res.status(500).send({message: error})
    }
   
})

router.route("/:userId") // Refactored this to combine diff routes with the same userId as parameter
.get((req, res) => {
    const userId = req.params.userId // getting the parameter
    console.log(req.user)

    res.json({message: "Get User With ID"})
})
.put((req, res) => {
    const userId = req.params.userId // getting the parameter
    res.json({message: "Put User With ID"})
})
.delete((req, res) => {
    const userId = req.params.userId // getting the parameter
    res.json({message: "Delete User With ID"})
})

// Login users
router.post("/login", async (req, res) => {
    const {email, password} = req.body
    console.log("inside the User route")
    if (!email || !password) {
        return res.status(418).send({message: "Email or Password can't be empty"})
    }
    try {
        const user = await userController.loginUser(req, res)
        console.log(user)
        if (user.status != 200){
            return res.status(400).json({status: 'error', message: 'log in error'})
        } else {
            return res.status(200).json({status: 'success', message: 'succesfully logged in', data: user.data})
        }
    } catch (error) {
        return res.status(500).send({message: error})
    }
})


// NOT IN USE. JUST FOR TESTING
// middleware to run code btween the starting of the request and ending of the request.
const users = [{name: "kennedy"}, {name: "Eva Norkor Dowuona Anyinatoe"}]
router.param("userId", (req, res, next, userId) => {
    req.user = users[userId]
    next()
})
export default router