import Input from "../../Components/Input/Input"
import { useContext, useState } from "react"
import { Credentials } from "../../Contexts/Credentials"
import {useNavigate } from "react-router-dom"
import Defaultbtn from "../../Components/Button/Button"
const Login =()=>{
    const {setCredential} = useContext(Credentials);
    const [inputValue , setInputValue] = useState("")
    const navigate = useNavigate()
    const onClick = () =>{
          setCredential([inputValue])
          navigate("/home");
    }
    return <div className="loginSection">
                <Input type="text" placeholder="Enter Email" onChange={(e)=>setInputValue(e.target.value)}/>
                <Input type="password" placeholder="Enter Password"/>
                <Defaultbtn onClick={()=>onClick()} value="Login"/>
    </div>
}
export default Login