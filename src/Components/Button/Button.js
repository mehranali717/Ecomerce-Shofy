import styled from "styled-components";
const Button = styled.button `
color:#fff;
background-color:#0277fd;
border:2px solid #0099ee;
padding:7px 20px;
font-size:17px;
border-radius:5px;
transition:0.4s;
&:hover {
    background-color: #0056b3;
  }
`
const Defaultbtn =(props)=>{
    return <Button {...props}>{props.value}</Button>
}
export default Defaultbtn