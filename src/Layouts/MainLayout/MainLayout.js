import {Sidebar} from "../../Components/index"
import Header from "../../Section/Header/Header";
import styled from "styled-components";
import { useContext } from "react";
import { Credentials } from "../../Contexts/Credentials";
import { Outlet } from "react-router-dom";
const LayoutWrapper = styled.div `
display:flex;
align-items:center;
`
const MainLayout =()=>{
    const {credentials} = useContext(Credentials)
    const {showSidebar} = useContext(Credentials)
    return <>
                <Header navItems={credentials}/>
                    <LayoutWrapper>
                       {showSidebar && <Sidebar/>} 
                        <Outlet />
                    </LayoutWrapper>
    </>
}
export default MainLayout