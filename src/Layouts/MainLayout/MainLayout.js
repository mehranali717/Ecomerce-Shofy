import Sidebar from "../../Components/Sidebar/Sidebar"
import Header from "../../Section/Header/Header";
import styled from "styled-components";
import { useContext } from "react";
import { Credentials } from "../../Contexts/Credentials";
const LayoutWrapper = styled.div `
display:flex;
`
const MainLayout =({children})=>{
    const {cradentials} = useContext(Credentials)
    return <>
                <Header navItems={cradentials}/>
                    <LayoutWrapper>
                        <Sidebar/>
                        <main>{children}</main>
                    </LayoutWrapper>
    </>
}
export default MainLayout