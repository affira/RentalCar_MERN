import DefaultLayout from "../Components/DefaultLayout";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getAllCars, deleteCar } from "../Redux/actions/carsAction";
import Loader from "../Components/Loader";
import { Row, Col } from 'antd';
import React from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { message, Popconfirm } from 'antd';




function AdminHome() {

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




    return (

        <DefaultLayout >


            <Row justify="center" gutter={16} className='mt-4'>
                <Col lg={20} sm={24}>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="mt-2 mr-4" style={{color: '#706568'}}>ADMIN PANEL</h3>
                        <button className="btn-1 pr-3 pl-3"><a href='/add-car'> ADD NEW CAR</a></button>
                    </div>

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
                                    <p> Rent  Per  Hour:  {car.rentPerHour}/-</p>

                                </div>

                                <div className='mr-4'>
                                    <Link to={`/edit-car/${car._id}`}><EditOutlined className='mr-3' style={{ color: 'green', cursor: 'pointer' }} /></Link>

                                    <Popconfirm
                                        title="Are you sure to delete this task?"
                                        onConfirm={()=>{dispatch(deleteCar({carid:car._id}))}}
                                        
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Link to={`/edit-car/${car._id}`}><DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} /></Link>
                                    </Popconfirm>


                                </div>

                            </div>

                        </div>
                    </Col>
                })}
            </Row>
        </DefaultLayout>
    );
};
export default AdminHome;
