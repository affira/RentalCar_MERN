
const express = require("express");
const router = express.Router();
const Car = require('../models/carModel');

const Booking = require('../models/bookingModel');


router.post("/bookcar", async (req, res) => {
    //req.body.TransactionId = '1234'
    try {
        const newbooking = new Booking(req.body);
        await newbooking.save();
        console.log('record saved');
        const car = await Car.findOne({ _id: req.body.car });
        console.log(req.body.car);
        car.bookedTimeSlots.push(req.body.bookedTimeSlots);

        await car.save();

        res.send('YOUR BOOKING IS SUCCESSFUL');

    }
    catch (error) {
        return res.status(400).json(error);

    }
});

router.get("/getallbookings", async (req, res) => {

    try {
        const bookings = await Booking.find().populate('car');
        res.send(bookings);
    }
    catch (error) {
        return res.status(400).json(error);
    }
   
});


module.exports = router;