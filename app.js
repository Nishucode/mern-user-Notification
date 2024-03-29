const express=require('express');
const mongoose=require('mongoose');
const cors=require("cors");
const app=express();
require('dotenv').config();

// middleware
const corsOptions={
    origin:"http://localhost:3000"
}
app.use(express.json());
app.use(cors(corsOptions));


// connect MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`App is Listening on PORT ${PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    });


// route
app.get("/", (req, res)=>{
    res.status(201).json({message: "Connected to Backend!"});
})

