//import DeafultLayout from "../Components/DefaultLayout";

import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../Components/Loader";
import { userLogin } from '../Redux/actions/userActions';
import AOS from 'aos';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



function Login() {

  const { loading } = useSelector(state => state.alertsReducer);

  const dispatch = useDispatch()
  function onFinish(values) {
    dispatch(userLogin(values));


    //console.log(values)
  }



  return (

    <div className="login">
      {loading === true && (<Loader />)}
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: 'relative' }}>
          <img
            data-aos='slide-right'
            data-aos-duration='1500'
            src='https://storage.cloud.google.com/rental_cars/LogoBF.jpg' width='100%' alt="" />
          <h1 className="login-logo">RENTAL     CARS</h1>

        </Col>
        <Col lg={8} className='text-left p-5'>
          
          <Form layout="vertical" className="login-form p-5" onFinish={onFinish}>
            <h2>L O G I N</h2>
            <hr />
            <Form.Item name='username' label='U s e r n a m e' rules={[{ required: true }]}>
              <Input placeholder="USERNAME" />
            </Form.Item>

            <Form.Item name='password' label='P a s s w o r d' rules={[{ required: true }]}>
              {<Input.Password placeholder="PASSWORD" />} 
              

            </Form.Item>


            <button className="btnLogin mt-2 mb-3"> L o g i n</button>
            <br />
            <Link to={'/register'} className="Linkbtn" > CLICK HERE TO REGISTER </Link>
          <hr/>
          
          <Link to={'/admin/login'} className="Linkbtn" >ADMIN LOGIN</Link>
          


          </Form>
        </Col>


      </Row>
    </div>
  );
}

export default Login;
