import { Outlet } from "react-router-dom"
import Header from "../../Section/Header/Header"
const Register =()=>{
    const navItems = ["Login" , "SignUp"]
    return <>
            <Header navItems={navItems}/>
            <Outlet context={["Email: Mehran@ali.com"]}/>
    </>
}
export default Register