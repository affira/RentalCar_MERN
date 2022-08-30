import React from 'react';
import DefaultLayout from '../Components/DefaultLayout';
import { Row, Col, Form, Input} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addCars } from '../Redux/actions/carsAction';
import Loader from '../Components/Loader';



function AddCar() {

    const loading = useSelector(state => state.alertReducer);
    const dispatch = useDispatch();


    function onFinish(values) {
        values.bookedTimeSlots = [];

        dispatch(addCars(values));
        console.log(values);
    }




    return (
        <DefaultLayout>
            {loading === true && (<Loader />)}
            <Row gutter={16} justify='center mt-5'>
                <Col lg={12} sm={24} xs={24} className="p-3">
                    <Form className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                        <h3>ADD NEW CAR</h3>
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

                        <button className='btn-1'>ADD CAR</button>
                    </Form>

                </Col>

            </Row>
        </DefaultLayout>
    )
}

export default AddCar;