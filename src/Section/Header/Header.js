import {Logo, Navbar} from "../../Components";
const Header =({navItems})=>{
    return <header>
                <div className="container">
                    <Logo logo="React.Dev"/>
                    <Navbar navItems={navItems}/>
                </div>
    </header>
}
export default Header