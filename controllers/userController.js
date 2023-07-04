const path = require('path');
const users = require("../models/userModel");

const getUser = (req, res)=>{
    res.status(200).sendFile(path.join(__dirname + '/../views/user.html'));
};
const postUser = (req, res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const user = {
        name,
        email
    };
    users.push(user);
    // res.status(201).send(`<h1> Welcome ${name} your email is ${email} registration successful </h1>`);
    res.status(201).json({
        success : true,
        users
        })
}

module.exports = { getUser, postUser}
