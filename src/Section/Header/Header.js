import Logo from "../../Components/Logo/Logo"
import Navbar from "../../Components/Navbar/Navbar"
const Header =({navItems})=>{
    return <header>
                <div className="container">
                    <Logo logo="React.Dev"/>
                    <Navbar navItems={navItems}/>
                </div>
    </header>
}
export default Header