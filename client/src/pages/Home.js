import DefaultLayout from "../Components/DefaultLayout";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getAllCars } from "../Redux/actions/carsAction";
import Loader from "../Components/Loader";
import { Row, Col,DatePicker} from 'antd';
import React from 'react';
import moment from 'moment';


const { RangePicker } = DatePicker;

function Home() {
  const { loading } = useSelector(state => state.alertsReducer)
  const { cars } = useSelector(state => state.carsReducer)
  const dispatch = useDispatch()
  const [totalCars, setTotalCars] = useState([]);


  useEffect(() => {
    dispatch(getAllCars());

  }, []);

  useEffect(() => {
    setTotalCars(cars);

  }, [cars]);


  function setFilter(values) {

    var selectedFrom = moment(values[0], 'MMM DD YYYY HH:mm');
    var selectedTo = moment(values[1], 'MMM DD YYYY HH:mm');

    var temp = [];

    for (var car of cars) {
      if (car.bookedTimeSlots.length == 0) {
        temp.push(car);
      }
      else {
        for (var booking of car.bookedTimeSlots) {
          if (selectedFrom.isBetween(booking.from, booking.to) ||
            (selectedTo.isBetween(booking.from, booking.to)) ||
            moment(booking.from).isBetween(selectedFrom, selectedTo) ||
            moment(booking.to).isBetween(selectedFrom, selectedTo)) {
          }
          else{
            temp.push(car);
          }
        }
      }
    }

    setTotalCars(temp);
  }


  return (

    <DefaultLayout >

      <Row className="mt-3" justify="center">
        <Col lg={20} sm={24} className="d-flex justify-content-left">
          <RangePicker showTime={{ format: 'HH:mm' }} format='MMM/DD/YYYY HH:mm' onChange={setFilter}></RangePicker>
        </Col>
      </Row>

      {loading === true && (<Loader />)}
      <Row justify='center' gutter={23} className='mt-3'>
        {totalCars.map(car => {
          return <Col lg={7} sm={30} xs={30}>
            <div className="car p-2 bs1">
              <img src={car.image} className="carImg" alt="" />

              <div className="carContent d-flex align-items-center justify-content-between">
                <div className="text-left pl-2">

                  <p>{car.name}</p>
                  <p> Rent  Per  Hour: {car.rentPerHour}/-</p>

                </div>

                <div>
                  <button className="btn-1 mr-3"><Link to={`/booking-car/${car._id}`}> Book  Now</Link></button>
                </div>

              </div>

            </div>
          </Col>
        })}
      </Row>
    </DefaultLayout>
  );
};

export default Home;

