import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../Components/DefaultLayout';
import { Row, Col, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { editCars, getAllCars } from '../Redux/actions/carsAction';
import Loader from '../Components/Loader';




function EditCar() {

    const loading = useSelector(state => state.alertReducer);
    const { cars } = useSelector(state => state.carsReducer);
    const { carid } = useParams();
    const dispatch = useDispatch();
    const [car, setCar] = useState();
    const [totalCars, setTotalCars]= useState([]);


    useEffect(() => {

        if (cars.length === 0) {
            dispatch(getAllCars())
        }
        else {
            setTotalCars(cars)
            setCar(cars.find(o => o._id === carid))
            console.log(car);
        }

    }, [cars]);


    function onFinish(values) {
        values._id=car._id;

        dispatch(editCars(values));
        console.log(values);
    }




    return (
        <DefaultLayout>
            {loading === true && (<Loader />)}
            <Row gutter={16} justify='center mt-5'>
                <Col lg={12} sm={24} xs={24} className="p-3">
                    {totalCars.length >0 && <Form initialValues={car} className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                        <h3>EDIT CAR</h3>
                        <hr />
                        
                        <Form.Item name='name' label='CAR NAME: ' rules={[{ required: true }]}>
                            <Input></Input>
                        </Form.Item>
                        <Form.Item name='image' label='IMAGE URL: ' rules={[{ required: true }]}>
                            <Input></Input>
                        </Form.Item>
                        <Form.Item name='rentPerHour' label='RENT PER HOUR: ' rules={[{ required: true }]}>
                            <Input></Input>
                        </Form.Item>
                        <Form.Item name='fuelType' label='FUEL TYPE: ' rules={[{ required: true }]}>
                            <Input></Input>
                        </Form.Item>
                        <Form.Item name='capacity' label='CAR CAPACITY: ' rules={[{ required: true }]}>
                            <Input></Input>
                        </Form.Item>

                        <button className='btn-1 pr-3 pl-3'>EDIT CAR</button>
                    </Form>
                    }

                </Col>

            </Row>
        </DefaultLayout>
    )
}

export default EditCar;