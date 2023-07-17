import express from 'express'
const router = express.Router()
import {login, signup} from '../controllers/auth.js'
import {allQuesParticularUser} from '../controllers/Questions.js'

router.post('/signup', signup)
router.post('/login', login)
router.post('/allQuestions', allQuesParticularUser)

export default router