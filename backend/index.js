const express = require('express');
const dotenv = require('dotenv');
const app = express()

dotenv.config()
const PORT = process.env.PORT || 3006;

app.get("/", (req,res) => {
    res.status(200).send({
        success: true,
        message: "Backend is working"
    })
})


app.listen(PORT,() => {
    console.log(`PORT ${PORT} is listening...`);
})