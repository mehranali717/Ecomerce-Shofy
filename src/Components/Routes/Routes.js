import {Route , Routes, Navigate ,useRoutes} from 'react-router-dom';
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
    let routes = useRoutes([
        {
            element:<ProtectedRoutes email={cradentials}><MainLayout/></ProtectedRoutes>,
            children:[
                {path:"/home", element:<Home />},
                {path:"/admin" , element:<Admin />},
                {path:"/user" , element:<User />}
            ]
        },
        {
            element:<Register/>,
            children:[
                {path:"/login" , element:<Login />},
                {path:"*" , element:<Navigate to="/login" />}
            ]
        }
    ])
    return routes
}
export default AllRoutes;
const ProtectedRoutes =({ children}) =>{
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const {cradentials} = useContext(Credentials);
	if((emailRegex.test(cradentials)))
    return children;
	return <Navigate to="/login" />;
}

//////////////////////other Ways to set routes///////////////////////////////////////////
 // return <Routes>
    //             <Route element={<ProtectedRoutes email={cradentials}><MainLayout /></ProtectedRoutes>}>
    //                 <Route path='/home' element={<Home />} />
    //                 <Route path='/admin' element={<Admin />} />
    //                 <Route path='/user' element = {<User />}/>
    //             </Route>
    //             <Route element={<Register />}>
    //                 <Route path='/login' element={<Login />}/>
    //                 <Route path='*' element = {<Navigate to="/login"/>}/>
    //             </Route>
    //             {/* <Route path='/home' element={<ProtectedRoutes><MainLayout><Home/></MainLayout></ProtectedRoutes>}/>
    //             <Route path='/login' element={<Register><Login /></Register>}/>
    //             <Route path="/admin" element={<ProtectedRoutes email={cradentials}><MainLayout><Admin/></MainLayout></ProtectedRoutes>}/>
    //             <Route path='/user' element={<ProtectedRoutes email={cradentials}><MainLayout><User/></MainLayout></ProtectedRoutes>}/>
    //             <Route path='*' element={<Navigate to="/login"/>}/> */}
    //        </Routes>