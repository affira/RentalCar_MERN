import axios from 'axios';
import { message } from 'antd';

export const adminLogin = (reqObj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.post('http://localhost:3000/api/admin/login', reqObj);
        localStorage.setItem('admin', JSON.stringify(response.data));
        //console.log();
        message.success('LOGIN SUCCESS');
        dispatch({ type: 'LOADING', payload: false });
        setTimeout(() => {
            window.location.href = '/admin';

        }, 500);


    } catch (error) {
        console.log(error)
        message.error('LOGIN FAILED!')
        dispatch({ type: 'LOADING', payload: false })
    }
};