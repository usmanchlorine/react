const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const checkuser=require("../utils/userauth")
require('dotenv').config();
const JWT_secrets = process.env.JWT_Secret;

//////////////////////////////////////// Create a User using: POST "/api/auth/" doesnt require auth 
router.post('/signup', [
    body('name', "enter  valid name containing min 3 ").isLength({ min: 3 }),
    body('email', 'Email is not Valid ').isEmail(),
    body('password', 'password can not be blank ').exists(),
],


    // if there are error return bad request and array of errors and if there are no errors then create a model which is the promise
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        /// makeing a service call to findone f
        let alreadyuser = await User.findOne({ email: req.body.email });
        // checking if user already exists but it will hit two timesDD
        if (alreadyuser) {
            return res.status(400).json({ err: 'sorry a user exist in this  database' });
        }

        // creating a hass password using salt and hast  both are async function yo you have to wait them 
        const salt = await bcrypt.genSalt(10); // creating a salt 
        const hashPassword = await bcrypt.hash(req.body.password, salt) // creating a hasspassword


        // this is creating a new user
        try {
            let user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashPassword,
            })

            const data = {
                user: user.id
            }
            console.log(JWT_secrets)
            const jwttoken = await jwt.sign(data, JWT_secrets)
            return res.status(200).json({ token: jwttoken });
            // if new user is not created by some internal error 
        } catch (e) {
            return res.status(500).json({ err: e });
        }


        // .then(user=>res.json(user))
        // .catch(err=>{console.log(err.message), res.json({ errors:"please enter a valid unique email"})});







    })

//////////////////////////////////////// Log in  a User using: POST "/api/auth/login" doesnt require auth 
router.post('/login', 
// validation check using body 
[
    body('email', 'Email is not Valid ').isEmail(),
    body('password', 'password must be 8 digit long ').isLength({ min: 8 }),
],


    // if there are error return bad request and array of errors and if there are no errors then create a model which is the promise
    async (req, res) => {
        const user=req.body;
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({err:errors.array()})
        }

        checkuser(user)
        .then(()=>{
            
            const data={
                id:user.id,
            }
            const authtoken=jwt.sign(data,JWT_secrets)
            return res.json({authtoken:authtoken})
        })
        .catch((e)=>{
            console.log(e)
            return res.status(e.status).send(e.message)

        })
            
        
        




        












    });












module.exports = router