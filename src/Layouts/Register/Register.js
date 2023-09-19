import Header from "../../Section/Header/Header"
const Register =({children})=>{
    const navItems = ["Login" , "SignUp"]
    return <>
            <Header navItems={navItems}/>
            {children}
    </>
}
export default Register