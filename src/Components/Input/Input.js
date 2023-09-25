import styled from "styled-components"
const InputWrapper = styled.div`
display:flex,
alignItems:center,
`
const Input =( {label, register,  ...props  })=>{
    return <InputWrapper >
        <label>{label}</label>
        <input  {...props}{...register}/>
    </InputWrapper>
}
export default Input