import { Router } from "express"
import passport from "passport"

const router = Router()

router.get('/signUp', (req, res) => {
    res.render('signUp')
})

router.post('/signUp', passport.authenticate('registro', {
    failureRedirect: '/errorRegistro',
    successRedirect: '/login'
}))

router.get('/errorRegistro', (req, res) => {
    res.render('errorRegistro')
})

router.get('/login', (req, res) => {
    res.render('signIn')
})



export default router 