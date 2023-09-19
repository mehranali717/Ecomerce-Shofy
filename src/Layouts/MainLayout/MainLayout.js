import Sidebar from "../../Components/Sidebar/Sidebar"
import Header from "../../Section/Header/Header";
import styled from "styled-components";
const LayoutWrapper = styled.div `
display:flex;
`
const MainLayout =({children})=>{
    return <>
                <Header/>
                <LayoutWrapper>
                    <Sidebar/>
                    <main>{children}</main>
                </LayoutWrapper>
    </>
}
export default MainLayout