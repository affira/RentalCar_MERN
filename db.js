const mongoose = require("mongoose");

function connectDB() {

    mongoose.connect('mongodb://localhost:27017/RentalCars', {useUnifiedTopology: true , useNewUrlParser: true});

    const connection = mongoose.connection
    connection.on(`connected`, () => {
        console.log(`MongoDB Connection Successful`)
    })
    connection.on(`error`, () => {
        console.log(`MongoDB Connection Error`)
    })

}


connectDB()
module.exports = mongoose

