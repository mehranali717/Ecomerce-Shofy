import {Input, Defaultbtn} from "../../Components"
import { useContext, useState } from "react"
import { Credentials } from "../../Contexts/Credentials"
import {useNavigate, useOutletContext } from "react-router-dom"
const Login =()=>{
    const [context] = useOutletContext();
    const {setCredential} = useContext(Credentials);
    const [inputValue , setInputValue] = useState("")
    const navigate = useNavigate()
    const onClick = () =>{
          setCredential([inputValue])
          navigate("/home");
    }
    return <div className="loginSection">
                {context}
                <Input type="text" placeholder="Enter Email" onChange={(e)=>setInputValue(e.target.value)}/>
                <Input type="password" placeholder="Enter Password"/>
                <Defaultbtn onClick={()=>onClick()} value="Login"/>
    </div>
}
export default Login