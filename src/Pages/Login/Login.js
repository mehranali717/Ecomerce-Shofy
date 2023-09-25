import {Input, Defaultbtn} from "../../Components"
import { useContext, useState } from "react"
import { Credentials } from "../../Contexts/Credentials"
import {useNavigate, useOutletContext } from "react-router-dom";
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
const ErrorMessage = styled.span`
color:red
`
const schema = yup.object({
    userName:yup.string().required("User Name is required").min(5,"Minimum of 5 characters"),
    email:yup.string().email("Enter Valid Email").test('unsupported-domain', 'This domain is not supported', function (value) {
        return !value || !value.endsWith('example.com');
      }).required("Email is required"),
    password:yup.string().required("Password is required").min(8,"Minimum of 8 characters").max(15),

});
const Login =()=>{
    const {register , handleSubmit , formState:{errors}} =useForm(
        {resolver:yupResolver(schema)})
    const [context] = useOutletContext();
    const {setCredential} = useContext(Credentials);
    const navigate = useNavigate()
   const onSubmit =(data) =>{
    setCredential([data.email]);
    navigate("/home");
   }
    return <form className="loginSection" onSubmit={handleSubmit(onSubmit)}>
                {context}
                <Input label="First Name:- " register={register("userName")} />
                <ErrorMessage>{errors.userName?.message}</ErrorMessage>
                <Input type="text" label="Enter Email :-" register={register("email" )}/>
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
                <Input type="password" label="Enter Password:-" placeholder="Enter Password" register={register("password" )}/><ErrorMessage>{errors.password?.message}</ErrorMessage>
                <Defaultbtn value="Login" type="submit"/>
    </form>
}
export default Login