import axios from 'axios';
import { message } from 'antd';

export const getAllCars = () => async dispatch => {

    dispatch({ type: 'LOADING', payload: true })
    try {
        const response = await axios.get('/api/cars/getallcars');
        dispatch({ type: 'GET_ALL_CARS', payload: response.data });
        dispatch({ type: 'LOADING', payload: false });


    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
    }
}

export const addCars=(reqObj) => async dispatch =>{
    dispatch({ type: 'LOADING', payload: true })
    try {

        await axios.post('/api/cars/addcar', reqObj);

        dispatch({ type: 'LOADING', payload: false });
        message.success('CAR ADDED SUCCESSFULLY');
        setTimeout(() => {
            window.location.href = '/admin';

        }, 500);

    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
        message.error('SOMETHING WENT WRONG! TRY AGAIN');
    }
}

export const editCars=(reqObj) => async dispatch =>{
    dispatch({ type: 'LOADING', payload: true })
    try {

        await axios.post('/api/cars/edit-car', reqObj);

        dispatch({ type: 'LOADING', payload: false });
        message.success('CAR DETAILES UPDATED SUCCESSFULLY!');
        setTimeout(() => {
            window.location.href = '/admin';

        }, 500);

    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
        message.error('SOMETHING WENT WRONG! TRY AGAIN');
    }
}

export const deleteCar=(reqObj) => async dispatch =>{
    dispatch({ type: 'LOADING', payload: true })
    try {

        await axios.post('/api/cars/deletecar', reqObj);

        dispatch({ type: 'LOADING', payload: false });
        message.success('CAR DELETED SUCCESSFULLY!');
        setTimeout(() => {
            window.location.reload();

        }, 500);

    } catch (error) {
        console.log(error)
        dispatch({ type: 'LOADING', payload: false })
        message.error('SOMETHING WENT WRONG! TRY AGAIN');
    }
}

