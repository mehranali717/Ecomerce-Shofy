import Input from "../../Components/Input/Input"
import { useContext } from "react"
import { Credentials } from "../../Contexts/Credentials"
import {useNavigate } from "react-router-dom"
import Defaultbtn from "../../Components/Button/Button"
const Login =()=>{
    const navigate = useNavigate()
    const onClick = () =>{
          navigate("/home");
    }
    const {setCredential} = useContext(Credentials);
    return <div className="loginSection">
                <Input type="text" placeholder="Enter Email" onChange={(e)=>setCredential(e.target.value)}/>
                <Input type="password" placeholder="Enter Password"/>
                <Defaultbtn onClick={()=>onClick()} value="Login"/>
    </div>
}
export default Login