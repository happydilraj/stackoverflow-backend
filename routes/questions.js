import express from 'express'
const router = express.Router()
import {AskQuestion, getAllQuestions, DeleteQuestion, VoteQuestion} from '../controllers/Questions.js'
import auth from '../middleware/auth.js'

router.post('/Ask', auth, AskQuestion)
router.get('/Get', getAllQuestions)
router.delete('/delete/:id', auth, DeleteQuestion)
router.patch('/vote/:id', auth, VoteQuestion)

export default router