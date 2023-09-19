import Admin from "../../Components/Admin/Admin"
import User from "../../Components/User/User"
import styled from "styled-components";
const DashboardWrapper = styled.div`
 width:calc(100% - 250px);
`
const Dashboard =()=>{
    return <DashboardWrapper>
                <Admin />
                <User />
    </DashboardWrapper>
}
export default Dashboard