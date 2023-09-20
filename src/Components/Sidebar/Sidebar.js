import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Sidebarmenu = styled.div`
    width: 250px;
    height: 82vh;
    background-color: #e0e0e0;
    color: #464545;
    padding: 20px;
`
const SidebarItems = styled.ul`
display:flex;
flex-direction:column;
gap:20px;
& a {
  color:#464545;
}
`
const Sidebar =()=>{
  return (
    <Sidebarmenu>
      <SidebarItems>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/user">User</Link></li>
      </SidebarItems>
    </Sidebarmenu>
  );
}
export default Sidebar;
