import { Outlet } from "react-router-dom"
import Header from "../../Section/Header/Header"
const Register =({children})=>{
    const navItems = ["Login" , "SignUp"]
    return <>
            <Header navItems={navItems}/>
            {children}
            <Outlet/>
    </>
}
export default Register