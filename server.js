const express = require('express')
const app = express()
const PORT = process.env.PORT || 7000  //vzH9CunQtVavziXM password
const dbConnection = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/api/cars/', require('./routes/carsRoute'));
app.use('/api/users/', require('./routes/usersRoute'));
app.use('/api/admin/', require('./routes/adminRoute'));
app.use('/api/bookings/', require('./routes/bookingsRoute'));


app.get('/', (req, res) => res.send('Hello World'))
app.listen(PORT, () => console.log(`Node is started in port ${PORT}`))