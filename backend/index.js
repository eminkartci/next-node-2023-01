const express = require('express');
var cors = require('cors')
const dotenv = require('dotenv');
const app = express()

app.use(cors())

dotenv.config()
const PORT = process.env.PORT || 3006;

app.get("/", (req,res) => {
    res.status(200).send({
        success: true,
        message: "Backend is working"
    })
})


app.get("/urunler", (req,res) => {
    res.status(200).send({
        success: true,
        data: [
            {id: 1, isim: "Elbise", fiyat: 55, gorsel: "albise1.webp"},
            {id: 2, isim: "Bilgisayar", fiyat:10000},
            {id: 3, isim: "Araba", fiyat:350000},
            {id: 4, isim: "Plak", fiyat:320},
            {id: 5, isim: "Danışmanlık", fiyat:1000},
            {id: 6, isim: "Canlı Müzik", fiyat:350},
            {id: 7, isim: "Telefon", fiyat:12000,gorsel: "telefon.jpeg"},
          ]
    })
})



app.listen(PORT,() => {
    console.log(`PORT ${PORT} is listening...`);
})