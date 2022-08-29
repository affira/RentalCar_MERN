//import DeafultLayout from "../Components/DefaultLayout";

import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../Components/Loader";
import {userRegister} from '../Redux/actions/userActions';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();





function Register() {
  const { loading } = useSelector(state => state.alertsReducer)

const dispatch=useDispatch()
  function onFinish(values){
    
    dispatch(userRegister(values));
    console.log(values);
  };
  


  return (

    <div className="login">
      {loading === true && (<Loader/>)}
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: 'relative' }}>
          <img 
          data-aos='slide-left' 
          data-aos-duration='1500' 
          src='https://storage.cloud.google.com/rental_cars/LogoB.jpg' width='100%' alt='' />
          <h1 className="login-logo">RENTAL     CARS</h1>

        </Col>
        <Col lg={8} className='text-left p-5'>
          <Form layout="vertical" className="login-form p-5" onFinish={onFinish}>
            <h2>R E G I S T E R</h2>
            <hr />
            <Form.Item name='username' label='U s e r n a m e' rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name='password' label='P a s s w o r d' rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name='c_password' label='C o n f i r m   P a s s w o r d' rules={[{ required: true }]}>
              <Input />
            </Form.Item>


            <button className="btnLogin mt-2 mb-3"> R E G I S T E R </button>

            <br />
            <Link to={'/login'}> CLICK HERE TO LOGIN </Link>

          </Form>
        </Col>


      </Row>
    </div>
  );
}

export default Register;
