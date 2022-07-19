import { Router } from "express"
import passport from "passport"

const router = Router()

function isAuth(req, res, next){
    if(req.isAuthenticated()){ //req.isAuthenticated() devuelve true o false. es true si esta la info de la persona en session porque se autentico
        next()
    } else {
        res.render('signIn')
    }
}

router.get('/signUp', (req, res) => {
    res.render('signUp')
})

router.post('/signUp', passport.authenticate('registro', { //al hacer esto (el passport.authenticate) ya guarda en session los datos (si se dio success)
    failureRedirect: '/errorRegistro',
    successRedirect: '/login'
}))

router.get('/errorRegistro', (req, res) => {
    res.render('errorRegistro')
})

router.get('/login', (req, res) => {
    res.render('signIn')
})

router.post('/login', passport.authenticate('login', { //al hacer esto se guardan los datos en session (si salio success)
    failureRedirect: '/errorLogin',
    successRedirect: '/bienvenido'
}))

router.get('/errorLogin', (req, res) => {
    res.render('errorLogin')
})

router.get('/bienvenido', isAuth, (req, res) => {
    res.render('bienvenido', {email: req.user.email})
})

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err){
            return res.json({status: 'logout ERROR'})
        }
        })
    res.render('adios')
})



export default router 