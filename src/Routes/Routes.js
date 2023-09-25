import React, { Suspense, useContext } from 'react';
import {Navigate ,useRoutes} from 'react-router-dom';
import {MainLayout , Register} from '../Layouts/index';
import { Credentials } from '../Contexts/Credentials';
const Home = React.lazy(() => import('../Pages/Home/Home'));
const Login = React.lazy(() => import('../Pages/Login/Login'));
const Admin = React.lazy(() => import('../Pages/Admin/Admin'));
const User = React.lazy(() => import('../Pages/User/User'));

const Routes = ()=>{
    const {credentials} = useContext(Credentials);
    let routes = useRoutes([
        {
            element:<ProtectedRoutes email={credentials}><MainLayout/></ProtectedRoutes>,
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
    return <Suspense fallback={<div>Loading...</div>} >
        {routes}
    </Suspense>
}
export default Routes;
const ProtectedRoutes =({ children}) =>{
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const {credentials} = useContext(Credentials);
	if((emailRegex.test(credentials)))
    return children;
	return <Navigate to="/login" />;
}

//////////////////////other Ways to set routes///////////////////////////////////////////
 // return <Routes>
    //             <Route element={<ProtectedRoutes email={credentials}><MainLayout /></ProtectedRoutes>}>
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
    //             <Route path="/admin" element={<ProtectedRoutes email={credentials}><MainLayout><Admin/></MainLayout></ProtectedRoutes>}/>
    //             <Route path='/user' element={<ProtectedRoutes email={credentials}><MainLayout><User/></MainLayout></ProtectedRoutes>}/>
    //             <Route path='*' element={<Navigate to="/login"/>}/> */}
    //        </Routes>