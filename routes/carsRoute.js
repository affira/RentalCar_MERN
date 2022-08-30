const express = require("express");
const router = express.Router();

const Car = require("../models/carModel")

router.get("/getallcars", async (req, res) => {

    try {
        const cars = await Car.find()
        res.send(cars)
    }
    catch (error) {
        return res.status(400).json(error);
    }

});

router.post("/addcar", async (req, res) => {

    try {
        const newCar = new Car(req.body);
        await newCar.save();


        console.log(newCar);
        res.send('CAR ADDED SUCCESSFUL');

    }
    catch (error) {
        return res.status(400).json(error);
    }

});

router.post("/edit-car", async (req, res) => {

    try {
        const car = await Car.findOne({ _id: req.body._id });
        car.name = req.body.name;
        car.image = req.body.image;
        car.fuelType = req.body.fuelType;
        car.capacity = req.body.capacity;
        car.rentPerHour = req.body.rentPerHour;

        await car.save();

        console.log(car);
        res.send('CAR UPDATED SUCCESSFUL');

    }
    catch (error) {
        return res.status(400).json(error);
    }

});

router.post("/deletecar", async (req, res) => {

    try {
        await Car.findOneAndDelete({ _id: req.body.carid });
        
        res.send('CAR UPDATED SUCCESSFUL');

    }
    catch (error) {
        return res.status(400).json(error);
    }

});

module.exports = router;