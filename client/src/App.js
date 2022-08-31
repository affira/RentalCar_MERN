
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'
import UserBookings from './pages/UserBookings';
import 'antd/dist/antd.css';
import ProtectedRoute from './Components/ProtectedRoute';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import AdminLogin from './pages/AdminLogin'


//${car._id}/:carid'



function App() {


  return (
    <div className="App" >


      <Router >

        <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/register' element={<Register />} />

          <Route path='/' element={<ProtectedRoute />}>
            <Route path='/' element={<Home />} />
          </Route>

          <Route path='/booking-car/:carid' element={<ProtectedRoute />}>
            <Route path='/booking-car/:carid' exact element={<BookingCar />} />
          </Route>

          <Route path='/user-bookings' element={<ProtectedRoute />}>
            <Route path='/user-bookings' element={<UserBookings />} />
          </Route>

          <Route path='/add-car' element={<ProtectedRoute />}>
            <Route path='/add-car' element={<AddCar />} />
          </Route>

          <Route path='/admin' element={<ProtectedRoute />}>
            <Route path='/admin' element={<AdminHome />} />
          </Route>

          <Route path='/edit-car/:carid' element={<ProtectedRoute />}>
            <Route path='/edit-car/:carid' element={<EditCar />} />
          </Route>


        </Routes>

      </Router>



    </div>
  );
}



export default App;




