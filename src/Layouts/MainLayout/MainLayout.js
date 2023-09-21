import {Sidebar} from "../../Components/index"
import Header from "../../Section/Header/Header";
import styled from "styled-components";
import { useContext } from "react";
import { Credentials } from "../../Contexts/Credentials";
import { Outlet } from "react-router-dom";
const LayoutWrapper = styled.div `
display:flex;
`
const MainLayout =()=>{
    const {cradentials} = useContext(Credentials)
    const {showSidebar} = useContext(Credentials)
    return <>
                <Header navItems={cradentials}/>
                    <LayoutWrapper>
                       {showSidebar && <Sidebar/>} 
                        <Outlet />
                    </LayoutWrapper>
    </>
}
export default MainLayout