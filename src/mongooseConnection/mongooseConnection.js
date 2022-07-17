import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://Mariela:mongo1991@cluster0.ashm8.mongodb.net/registroMongoD26?retryWrites=true&w=majority')
.then(res => console.log('mongoose conectado a la base de datos'))
.catch(ee => console.log(err))