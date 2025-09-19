import styled from 'styled-components';

const StyledInput = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: ${(props) => props.width || "200px"};
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: #00ADEF; 
  }
`;

export default function Button({type = 'text', width, ...props}){
    return(
        <StyledInput type={type} width={width} {...props}/>
    )
};