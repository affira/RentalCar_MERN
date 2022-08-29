/* eslint-disable react/jsx-pascal-case */
import { Button, Dropdown, Menu, Row, Col } from 'antd';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('user'));


    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (<a href='/'> Home </a>),
                },
                {
                    key: '2',
                    label: (<a href='/user-bookings'> Bookings </a>),
                },
                {
                    key: '3',
                    label: (<a href=''> Profile </a>),
                },
                {
                    key: '4',
                    label: (<li onClick={() => {
                        localStorage.removeItem('user');
                        window.location.href = '/login';
                    }}> Logout </li>),
                },
            ]}
        />
    );





    return (
        <div>
            <div className="header bs1">
                <Row gutter={16} justify='center'>
                    <Col lg={20} sm={24} xs={24}>
                        <div className="d-flex justify-content-between">
                            <h1><Link to='/' style={{ color: '#706568'}}><img src='https://storage.cloud.google.com/rental_cars/LogoR.png' height='40' width='80'></img> RENTAL CARS</Link></h1>

                            <Dropdown overlay={menu} placement="bottom" arrow>
                                <Button> | | | {user.username} | | | </Button>

                            </Dropdown>


                        </div>
                    </Col>
                </Row>


            </div>

            <div className="content">
                {props.children}


            </div>
        </div>
    );
}

export default DefaultLayout;
