const express = require('express');
const app = express();
const userRouter = require('./routes/userRoute')

const port = 3001;
const hostName = '127.0.0.1';

app.use(express.urlencoded({urlencoded : true}));
app.use(express.json());
app.use( '/user', userRouter);

app.get('/', (req, res)=>{
    res.status(200).sendFile(__dirname + '/index.html')
});

app.listen(port, hostName, ()=>{
    console.log(`Server is running at http://${hostName}:${port}`);
})
