const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
//pass 0eFOeCiRaXmmQemk
//middlewares
// qhPF8eN08DNKCoac
app.use(express.json());
app.use(cors());
app.use("/books",router); //localhost:5000/books


mongoose.connect("mongodb+srv://viraj:viraj@cluster0.ndh2tgm.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    app.listen(5000);
}).catch((err)=> console.log(err));