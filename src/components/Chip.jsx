import styled from "styled-components";
import ChipFrame from "../assets/images/ChipComponent.svg";

const DisplayWrapper = styled.div`
    width: ${(props) => props.width || "300px"};
    height: ${(props) => props.height || "200px"};
    background-color: #2F3234;
    border-radius: 40px;
    padding: 58px;
    position: relative;
    box-shadow: inset 0 0 15px rgba(0, 255, 255, 0.3);
`;

const Content = styled.div`
    background-color: #006771;
    /* border: 11px solid black; */
    border-radius: 6px;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
`;

const Interno = styled.div`
width: 100%;
height: 100%;
background-color: black;
border-radius: 6px;
padding: 11px;
`

const Bola = styled.div`
    position: absolute;
    border-radius: 100px;   
    background-color: black;
    width: 40px;    
    height: 40px;
    top: 10px;
    left: 20px;
`
const Bola2 = styled.div`
    position: absolute;
    border-radius: 100px;
    background-color: black;
    width: 40px;
    height: 40px;
    top: 10px;
    right: 20px;
`
const Bola3 = styled.div`
    position: absolute;
    border-radius: 100px;
    background-color: black;
    width: 40px;
    height: 40px;
    bottom: 10px;
    left: 20px;
`
const Bola4 = styled.div`
    position: absolute;
    border-radius: 100px;
    background-color: black;
    width: 40px;
    height: 40px;
    bottom: 10px;
    right: 20px ;
`

export default function ChipDisplay({ width, height, children }) {
    return (
        <DisplayWrapper width={width} height={height}>
            <Bola/>
            <Bola2/>
            <Bola3/>
            <Bola4/>
            <Interno>
                <Content></Content>
            </Interno>
        </DisplayWrapper>
    );
}
