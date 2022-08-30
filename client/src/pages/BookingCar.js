
import DefaultLayout from "../Components/DefaultLayout";
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCars } from "../Redux/actions/carsAction";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import moment from 'moment';
//import Loader from "../Components/Loader"; const {loading} = useSelector(state => state.alertReducer); {loading === true && (<Loader/>)}
import { Row, Col, Divider, DatePicker, Checkbox, Modal } from 'antd';
import { bookCar } from "../Redux/actions/bookingAction";
import AOS from 'aos';
import 'aos/dist/aos.css';




function BookingCar() {


  const { carid } = useParams();
  const { cars } = useSelector(state => state.carsReducer);
  const [car, setCar] = useState({});
  const dispatch = useDispatch();
  const loading = useSelector(state => state.alertReducer);

  const { RangePicker } = DatePicker;
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [TotalHours, setTotalHours] = useState(0);
  const [driver, setDriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const [showModal, setShowModal] = useState(false);




  useEffect(() => {

    if (cars.length === 0) {
      dispatch(getAllCars())
    }
    else {
      setCar(cars.find(o => o._id === carid))
    }
  }, [cars]);

  useEffect(() => {
    setTotalAmount((TotalHours * car.rentPerHour))
    if (driver) {
      setTotalAmount(totalAmount + (TotalHours * 200))
    }

  }, [driver, TotalHours])



  function selectTimeSlots(values) {

    setFrom(moment(values[0]).format('MMM/DD/YYYY HH:mm'));
    setTo(moment(values[1]).format('MMM/DD/YYYY HH:mm'));

    setTotalHours(values[1].diff(values[0], 'hours'));

  }
  function bookNow() {

    const reqObj = {
      user: JSON.parse(localStorage.getItem('user'))._id,
      car: car._id,
      TotalHours,
      totalAmount,
      driverRequired: driver,
      bookedTimeSlots: {
        from,
        to,
      }
    }

    dispatch(bookCar(reqObj));

  }


  return (
    <DefaultLayout>
      {loading === true && (<Loader />)}

      <Row justify="center" className="d-flex align-items-center" style={{ minHeight: '90vh' }} >
        <Col lg={10} sm={24} xs={24} className='p-3' >
          <img className="carImageBook bs1 w-100" src={car.image} alt="" data-aos='flip-left' data-aos-duration='1500'></img>

        </Col>

        <Col lg={10} sm={24} xs={24} >
          <Divider style={{borderColor: "black"}} type="horizontal" dashed>
            CAR INFO
          </Divider>
          <div className='text-right'>
            <p>{car.name}</p>

            <p>Fuel Type: {car.fuelType}</p>
            <p>Max Passengers: {car.capacity}</p>

          </div>
          <Divider style={{borderColor: "black"}} type="horizontal" dashed>
            HOURS TO RENT
          </Divider>
          <RangePicker showTime={{ format: 'HH:mm' }} format='MMM/DD/YYYY HH:mm' onChange={selectTimeSlots} />

          <br />
          <button className='btn-1 mt-2' onClick={() => { setShowModal(true); }}>
            SEE BOOKED SLOTS
          </button>

          {from && to && (

            <div className='text-right'>
              <p>TOTAL HOURS: {TotalHours}</p>
              <p>Rent Per Hour: {car.rentPerHour}/-</p>
              <Checkbox onChange={(e) => {
                if (e.target.checked) {
                  setDriver(true);
                }
                else {
                  setDriver(false);
                }
              }}>DRIVER REQUIRED</Checkbox>
              <h3>TOTAL AMOUNT: {totalAmount}</h3>
              <button className="btn-1" onClick={bookNow}>BOOK NOW</button>

            </div>)}

        </Col>


      </Row>
      {car.name && (
        <Modal visible={showModal} closable={false} footer={false} title='BOOKED TIME SLOTS'>

          <div className="p-2">
            {car.bookedTimeSlots.map((slot) => {
              return <button className="btn-1 mt-2">
                {slot.from} - {slot.to}
              </button>
            })}
            <div className="text-right mt-5">
              <button className="btn-1" onClick={() => { setShowModal(false); }}>
                CLOSE
              </button>
            </div>


          </div>
        </Modal>
      )};



    </DefaultLayout>
  );
}

export default BookingCar;
