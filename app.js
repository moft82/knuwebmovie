// Package
const express = require('express')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const fileUpload = require('express-fileupload')
const ejs = require('ejs')


// CONTROLLERS
const homeController = require('./controllers/home')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')
const registerController = require('./controllers/register')
const registerUserController = require('./controllers/registerUser')
const viewController = require('./controllers/view')
const commentController = require('./controllers/comment')
// // MIDDLEWARE
const commentDuplicateMiddleWare = require('./middlewares/commentDuplicateMiddleware')
const authMiddleWare = require('./middlewares/authMiddleware')
const redirectAuthMiddleWare = require('./middlewares/redirectAuthMiddleware')

// MONGO DB
mongoose.connect('mongodb+srv://moft:Adminmoft@cluster0.5h1nt.mongodb.net/web', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = mongoose.connection
db.once('open', () => {
    console.log("connected...")
})

// HTTP SET
const app = new express()
app.use(fileUpload())
app.set('view engine', 'ejs')
app.use(express.static('./public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Session
app.use(expressSession({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}))

// Port Set
let port = process.env.PORT;
if (port == null||port==""){
    port = 4000;
}
app.listen(port, () => { console.log('App listening on port 4000') })

global.loggedIn = null;
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});

// MIDDLEWARE SET
app.use('/user/*', redirectAuthMiddleWare)
app.use('/auth/*', redirectAuthMiddleWare)
app.use('/comment', authMiddleWare, commentDuplicateMiddleWare)
// Routers
app.get('/', homeController)
app.get('/user/login',redirectAuthMiddleWare ,loginController)
app.post('/auth/login', loginUserController)
app.get('/logout', logoutController)
app.get('/user/register',redirectAuthMiddleWare, registerController)
app.post('/auth/register',redirectAuthMiddleWare ,registerUserController)
app.get('/view/:code', viewController)
app.post('/comment', commentController)