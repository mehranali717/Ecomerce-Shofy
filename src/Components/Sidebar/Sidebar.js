import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Sidebarmenu = styled.div`
    width: 250px;
    height: 86vh;
    background-color: #333;
    color: white;
    padding: 20px;
`
const SidebarItems = styled.ul`
display:flex;
flex-direction:column;
gap:20px;
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
