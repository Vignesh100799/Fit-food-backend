const express = require('express');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const DB_URL = process.env.MD_URL
const morgan = require('morgan');
const bodyParser = require('body-parser');

// {This is all about own module}

const User = require('./modal/register')

const connect_DB = require('./db/db')
const mealSchema = require('./modal/fooditem');
const registerUser = require('./routes/auth/register');
const loginUser = require('./routes/auth/login');
const activateUser = require('./routes/auth/activate');
const forgotPass = require('./routes/auth/forgetPass');
const resetPass = require('./routes/auth/reset');
const updateSetting = require('./routes/auth/settings');


app.use(morgan('tiny'))
app.use(express.json())
app.use(cors({
    origin: "*"
}))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send({
        hello: "Server Checking"
    })
})
app.post("/api/register", registerUser)
app.get("/api/activate-account/:email/:token", activateUser);
app.post('/api/login', loginUser)
app.post('/api/forgot-password', forgotPass)
app.post("/api/reset-password/:token", resetPass)
app.patch("/api/updateSetting/:id", updateSetting)

connect_DB(DB_URL)
app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:${process.env.PORT} ...`);
})