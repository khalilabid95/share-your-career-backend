const express = require('express');

const  mongoose  = require('mongoose');
require('dotenv').config();
const app = express()
app.use(express.json());
const usersRoute = require('./routes/users')

app.get('/',(req,res)=>{
    res.json({message: "welecome"})
})

app.use('/auth',usersRoute)


PORT =process.env.PORT || 3000
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