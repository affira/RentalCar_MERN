import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [status, setStatus] = useState(true);
    const user2 = localStorage.getItem('user');
    const user = JSON.parse(user2);


    useEffect(() => {
        if (user) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
        setStatus(false);
    }, [user]);
    return { loggedIn, status };
};