import React from 'react';
import DefaultLayout from "../Components/DefaultLayout";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import { getAllBookings } from "../Redux/actions/bookingAction";
import { Row, Col, } from 'antd';
import moment from 'moment';



function UserBookings() {

    const { bookings } = useSelector(state => state.bookingsReducer);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));
    const { loading } = useSelector(state => state.alertsReducer)


    useEffect(() => {
        dispatch(getAllBookings());

    }, []);


    return (
        <DefaultLayout>
            <div className='userBookings'>
                {loading === true && (<Loader />)}
                <h3 className='text-center mt-2'>MY BOOKINGS</h3>

                <Row justify='center' gutter={16}>
                    <Col lg={15} sm={24}>

                        {bookings.filter(o => o.user == user._id).map(booking => {
                            return <Row gutter={16} className='bs1 m-3' >

                                <Col lg={7} sm={24}>
                                    <p><b>{booking.car.name}</b></p>
                                    <p>RENT PER HOUR:  <b>{booking.car.rentPerHour}</b></p>
                                    <p>TOTAL HOURS:  <b>{booking.TotalHours}</b></p>
                                    <p>TOTAL AMOUNT:  <b>{booking.totalAmount}</b></p>
                                </Col>
                                <Col lg={10} sm={24}>
                                    <p>BOOKED FROM:  <b>{booking.bookedTimeSlots.from}</b></p>
                                    <p>BOOKED TO:  <b>{booking.bookedTimeSlots.to}</b></p>
                                    <p>DATE OF BOOKING:  <b>{moment(booking.createdAt).format('MMM DD YYYY')}</b></p>
                                </Col>
                                <Col lg={7} sm={24} className='text-right'>
                                    <img style={{ borderRadius: 5 }} src={booking.car.image} height='150' className='p-2'></img>
                                </Col>

                            </Row>
                        })}

                    </Col>
                </Row>
            </div>
        </DefaultLayout>
    )
}

export default UserBookings