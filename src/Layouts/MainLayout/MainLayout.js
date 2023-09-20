import Sidebar from "../../Components/Sidebar/Sidebar"
import Header from "../../Section/Header/Header";
import styled from "styled-components";
import { useContext } from "react";
import { Credentials } from "../../Contexts/Credentials";
import { Outlet } from "react-router-dom";
const LayoutWrapper = styled.div `
display:flex;
`
const MainLayout =({children})=>{
    const {cradentials} = useContext(Credentials)
    const {showSidebar} = useContext(Credentials)
    return <>
                <Header navItems={cradentials}/>
                    <LayoutWrapper>
                       {showSidebar && <Sidebar/>} 
                        <main>{children}</main>
                        <Outlet />
                    </LayoutWrapper>
    </>
}
export default MainLayout