// const { request, response } = require("express");
const express = require("express");
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModel');
router.post('/signup', (request,response) => {
    const signedUpUser = new signUpTemplateCopy({
        name: request.body.name,
        phone: request.body.phone,
        email: request.body.email,
        username: request.body.username,
        password: request.body.password,
        address: request.body.address
    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
});
router.get('/signin')
module.exports = router;