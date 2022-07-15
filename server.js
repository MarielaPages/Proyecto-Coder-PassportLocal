import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import apiRoutes from './src/routes/apiRoutes.js'
import passport from 'passport'
import './src/passport/local.js'
import './src/mongooseConnection/mongooseConnection.js'
import { appendFile } from 'fs'

//creo mi app servidor
const app = express();

//le digo a la app donde estaran mis templates y prendo el motor de plantillas
app.set('views', './src/views')
app.set('view engine', 'ejs')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(session({
    secret:'secretKey',
    saveUninitialized: false,
    resave:false,
    store: 'mongodb+srv://Mariela:mongo1991@cluster0.ashm8.mongodb.net/sessionMongoD26?retryWrites=true&w=majority',
    cookie: {maxAge:600000} //expira en 10 mins
}))
app.use('/', apiRoutes)



//inicio server
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Your app is listening on port ${PORT}`)
})

server.on('error', error => console.log(`Error en el servidor ${error}`))