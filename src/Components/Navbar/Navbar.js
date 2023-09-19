import { useContext } from "react"
import { Credentials } from "../../Contexts/Credentials"
import { memo } from "react"
const Navbar =({login , signUp })=>{
    const {cradentials} = useContext(Credentials)
    return <nav>
        <ul className="navList">
            <li><a href="/login">{login}</a></li>
            <li><a href="/login">{signUp}</a></li>
            <span>Email:{cradentials}</span>
        </ul>
    </nav>
}
export default memo(Navbar)