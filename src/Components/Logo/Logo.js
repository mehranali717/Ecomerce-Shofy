import { useContext, useEffect } from "react";
import { Credentials } from "../../Contexts/Credentials";
import styled from "styled-components";
const HamBurger = styled.span`
@media only screen and (max-width: 767px) {
    width:30px;
    height:3px;
    background-color:#e65c00;
    display:inline-block;
    z-index:1;
    top:15px;
    left:-5px;
    position:relative;
    cursor:pointer;
    &::before {
        content:'';
        position:absolute;
        top:-10px;
        background-color:#e65c00;
        height:3px;
        width:30px;
        cursor:pointer;
    }
    &::after {
        content:'';
        position:absolute;
        top:10px;
        background-color:#e65c00;
        height:3px;
        width:30px;
        cursor:pointer;
    }
}
    `
    const Desklogo = styled.a`  
    @media only screen and (max-width: 768px) {
        display:none;
        } 
    @media only screen and (min-width: 768px) {
    display:inline-block;
}
    `
const Logo =({logo})=>{
    const {credentials} = useContext(Credentials);
    const {showSidebar ,setShowSidebar} = useContext(Credentials);
    const displaySidebar =()=>{
        setShowSidebar(!showSidebar)
    }
    const updateStateForDesktop = () => {
        if (window.innerWidth > 768) {
          setShowSidebar(true);
        }
        if (window.innerWidth < 768) {
            setShowSidebar(false);
          }
      };    
      useEffect(() => {
        window.addEventListener("resize", updateStateForDesktop);    
      }, []);
      useEffect(() => {
        updateStateForDesktop();
      }, []);
    
    return <>
            <Desklogo>{logo}</Desklogo>
            {credentials.map((email , index)=>(email && <HamBurger onClick={()=>displaySidebar()} key={index}/>)) }
           </>
}
export default Logo