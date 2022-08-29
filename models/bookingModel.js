const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'cars' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    bookedTimeSlots: {
        from: { type: String },
        to: { type: String }
    },
    //TransactionId: { type: String },
    TotalHours: { type: Number },
    totalAmount: { type: Number },
    driverRequired: { type: Boolean },
    
}, { timestamps: true }
)

const bookingModel = mongoose.model('bookings', bookingSchema)
module.exports = bookingModel