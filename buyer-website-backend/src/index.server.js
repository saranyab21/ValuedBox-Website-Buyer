const express = require('express');
const env = require('dotenv')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const userRoutes = require('./routes/user')
//environment variable

env.config();

// mongodb connection
// mongodb+srv://root:<password>@cluster0.rbdg6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.rbdg6.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
    ).then(() => {
        console.log("Database Connected")
    });

app.use(bodyParser());

app.use('/api', userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port ${process.env.PORT}`);
})