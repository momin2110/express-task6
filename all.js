const express = require('express');
const app = express();

const port = 3001;
const hostName = '127.0.0.1';

app.use(express.urlencoded({urlencoded : true}));
app.use(express.json());

let users = [
    {
        name : "Momin Ahmed",
        email : "momin3040@gmail.com"
    },
    {
        name : "Shakil Mahmud",
        email : "sakil34533@gmail.com"
    },
];

const form = `
    <h1>Registration Form</h1>
    <form action="/user" method="POST">
        <label for="name"> Name : </label>
        <input type= "text" name="name" id="name" /><br /><br />
        <label for="email"> Email : </label>
        <input type= "text" name="email" id="email" /><br /><br />
        <button type="submit"> Submit </button>
    </form>
`

app.get('/', (req, res)=>{
    res.status(200).sendFile(__dirname + '/index.html')
});
app.get('/user', (req, res)=>{
    res.status(200).send(form)
});
app.post('/user', (req, res)=>{
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
        users})
});
app.listen(port, hostName, ()=>{
    console.log(`Server is running at http://${hostName}:${port}`);
})
