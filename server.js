const express = require('express');
const cors = require('cors')
const  mongoose  = require('mongoose');
require('dotenv').config();
const app = express()

app.use(express.json());
app.use(cors({ credentials: true, origin: [process.env.WEB_APP_URL] }))
const usersRoute = require('./routes/users')
const TECH =[
    {
    _id: "1",
    name: "React"
},
{
    _id: "2",
    name: "Node"
},
]
app.get('/',(req,res)=>{
    res.json({message: "welecome"})
})
app.get('/technologies', (req,res) =>{
    res.json(TECH)
})
app.use('/auth',usersRoute)



PORT =process.env.PORT || 5000
mongoose.connect(process.env.Data_Base_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`)
        });
    })
    .catch(error => {
        console.log(error);
    })