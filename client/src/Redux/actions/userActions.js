import axios from 'axios';
import { message } from 'antd';



export const userLogin = (reqObj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.post('/api/users/login', reqObj);
        localStorage.setItem('user', JSON.stringify(response.data));

        message.success('LOGIN SUCCESS');
        dispatch({ type: 'LOADING', payload: false });
        setTimeout(() => {
            window.location.href = '/';

        }, 500);

    } catch (error) {
        console.log(error)
        message.error('LOGIN FAILED!')
        dispatch({ type: 'LOADING', payload: false })
    }
};

// export const adminLogin = (reqObj) => async dispatch => {
//     dispatch({ type: 'LOADING', payload: true })
//     try {
//         const response = await axios.post('/api/users/login', reqObj);
//         localStorage.setItem('admin', JSON.stringify(response.data));

//         message.success('LOGIN SUCCESS');
//         dispatch({ type: 'LOADING', payload: false });
//         if (reqObj.body.admin === 'AYAN') {
//             setTimeout(() => {
//                 window.location.href = '/admin';

//             }, 500);
//         }
//         else {
//             setTimeout(() => {
//                 window.location.href = '/';

//             }, 500);
//         }

//     } catch (error) {
//         console.log(error)
//         message.error('LOGIN FAILED!')
//         dispatch({ type: 'LOADING', payload: false })
//     }
// };

export const userRegister = (reqObj) => async dispatch => {
    dispatch({ type: 'LOADING', payload: true })
    try {

        const response = await axios.post('/api/users/register', reqObj);

        message.success('REGISTRATION SUCCESSFUL');
        setTimeout(() => {
            window.location.href = '/login';

        }, 500);

        dispatch({ type: 'LOADING', payload: false });


    } catch (error) {
        console.log(error)
        message.error('REGISTRATION FAILED!')
        dispatch({ type: 'LOADING', payload: false })
    }
}