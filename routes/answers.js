import express from 'express'
const router = express.Router()
import {postAnswer, deleteAnswer} from '../controllers/Answers.js'
import auth from '../middleware/auth.js'

router.patch('/post/:id', auth,  postAnswer)
router.patch('/delete/:id', auth, deleteAnswer)

export default router