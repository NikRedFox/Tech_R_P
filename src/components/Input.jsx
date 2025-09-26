import styled from 'styled-components';

const StyledInput = styled.input`
    padding: 8px;
    border: 1px solid var(--color-neutral-04);
    border-radius: 4px;
    width: ${(props) => props.width || "200px"};
    height: ${(props) => props.height || "36px"};
    font-size: ${(props) => props.fontSize || "16px"};

    &:focus {
        outline: none;
        border-color: var(--color-tertiary-01); 
  }
`;

export default function Input({type = 'text', width, height, fontSize, ...props}){
    return(
        <StyledInput type={type} width={width} height={height} fontSize={fontSize} {...props}/>
    )
};