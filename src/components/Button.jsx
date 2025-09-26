import styled from "styled-components";

const StyledButton = styled.button`
    width: ${(props) => props.width || "200px"};
    font-size: ${(props) => props.fontSize || "16px"};
    padding: 8px;
    border: 1px solid var(--color-neutral-04);
    border-radius: 4px;
    color: var(--color-neutral-02);
    cursor: pointer;
`

export default function Button({width, fontSize, ...props}){
    return(
        <StyledButton width = {width} fontSize={fontSize} {...props}>
            Entrar
        </StyledButton>
    )
};