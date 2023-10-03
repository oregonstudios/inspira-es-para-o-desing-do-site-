import styled from 'styled-components'

const LoginInputLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`
const LoginLabel = styled.label`
    font-size: 22px;
    font-weight: 600;
`
const LoginInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    padding: 0 0 0.5rem 0;
    border-bottom: 2px solid #FFF;
    background: transparent;
    color: #FFF;
    font-size: 18px;
    font-weight: 600;
`

export default function LoginInputLabel(props){
    return(
        <LoginInputLabelContainer>
            <LoginLabel htmlFor={props.InputId} >{props.children}</LoginLabel>
            <LoginInput type={props.InputType} id={props.InputId} required={props.isRequired}></LoginInput>
        </LoginInputLabelContainer>
    )
}