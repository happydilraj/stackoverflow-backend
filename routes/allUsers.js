import express from 'express'
const router = express.Router()
import {getAllUsers, updateProfile} from '../controllers/AllUsers.js'
import auth from '../middleware/auth.js'

router.get('/GetAllUsers', getAllUsers)
router.patch('/update/:id' , auth, updateProfile)

export default router