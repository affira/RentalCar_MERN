import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../Redux/actions/userAuth'
import Loader from './Loader';

const ProtectedRoute = () => {
  const { loggedIn, status } = useAuthStatus();
  if (status) {
    return <Loader />
  }

  return loggedIn ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;