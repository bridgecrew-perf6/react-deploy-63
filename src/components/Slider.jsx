import styled from "styled-components"
import { useState } from "react";
import ArrowLeftIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems } from "../data";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background: fee;
    border-radius: 50%;
    background: #fff0dd;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.6;
    z-index: 3;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=> props.slideIndex * -100}vw);
    transition: 1s ease;
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #${props => props.bg};
`
const ImgHolder = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    height: 80%;
`
const InfoHolder = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500px;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background: white;
    border: 1px solid lightgray;
    cursor: pointer;
    &:hover {
        opacity: 0.5;
    }
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    let newSlideIndex = 0;
    const handleClick = (direction) => {
        if(direction === "left") { newSlideIndex = slideIndex > 0 ? (slideIndex - 1) : 2; } 
        if(direction === "right") { newSlideIndex = slideIndex < 2 ? (slideIndex + 1) : 0; } 
        setSlideIndex(newSlideIndex);
    };

    return (  
        <Container>
            <Arrow direction="left" onClick={()=> handleClick("left")}>
                <ArrowLeftIcon/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bgc}>
                        <ImgHolder>
                            <Image src = {item.img} />
                        </ImgHolder>
                        <InfoHolder>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>SHOP NOW</Button>
                        </InfoHolder>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=> handleClick("right")}>
                <ArrowRightIcon/>
            </Arrow>
        </Container>
    )
}

export default Slider