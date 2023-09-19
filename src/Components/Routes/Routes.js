import {Route , Routes, Navigate } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Login from '../../Section/Login/Login';
import Admin from '../Admin/Admin';
import MainLayout from '../../Layouts/MainLayout/MainLayout';
import User from '../User/User';
import { useContext } from 'react';
import { Credentials } from '../../Contexts/Credentials';
import Register from '../../Layouts/Register/Register';
const AllRoutes = ()=>{
    const {cradentials} = useContext(Credentials);
    return <Routes>
                <Route path='/home' element={<ProtectedRoutes><MainLayout><Home/></MainLayout></ProtectedRoutes>}/>
                <Route path='/login' element={<Register><Login /></Register>}/>
                <Route path="/admin" element={<ProtectedRoutes email={cradentials}><MainLayout><Admin/></MainLayout></ProtectedRoutes>}/>
                <Route path='/user' element={<ProtectedRoutes email={cradentials}><MainLayout><User/></MainLayout></ProtectedRoutes>}/>
                <Route path='*' element={<Navigate to="/login"/>}/>
           </Routes>
}
export default AllRoutes;
const ProtectedRoutes =({ children}) =>{
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const {cradentials} = useContext(Credentials);
	if((emailRegex.test(cradentials)))
    return children;
	return <Navigate to="/login" />;
}