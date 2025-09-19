import styled from "styled-components";

const StyledButton = styled.button`
    width: ${(props) => props.width || "200px"};
    font-size: ${(props) => props.fontSize || "16px"};
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #000000;
    cursor: pointer;
`

export default function Button({width, fontSize, ...props}){
    return(
        <StyledButton width = {width} fontSize={fontSize} {...props}>
            Entrar
        </StyledButton>
    )
};