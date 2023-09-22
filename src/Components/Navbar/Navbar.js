import styled from "styled-components";
const Navlist = styled.ul `
    display:flex;
    justify-content:space-between;
`
const Navbar =({navItems})=>{
    return <nav>
               <Navlist>
                    {navItems.map((item , index)=>( <li key={index}>{item}</li>))}
               </Navlist>
    </nav>
}
export default Navbar;