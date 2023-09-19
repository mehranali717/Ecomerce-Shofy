import Logo from "../../Components/Logo/Logo"
import Navbar from "../../Components/Navbar/Navbar"
const Header =()=>{
    return <header>
        <div className="container">
            <Logo logo="React.Dev"/>
            <Navbar login="login" signUp="signUp"/>
        </div>
    </header>
}
export default Header